const router = require("express").Router();

const { userLogin } = require("../services/users");
const { addToFileContent } = require("../utils");

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateEmail(email) {
   return emailRegex.test(email);
}

function validateString(value) {
   if (typeof value === "string" && value !== "") {
      return true;
   }
   return false;
}

function validateRegister(_request, _response, next) {
   const formData = _request.body;

   const errors = {};

   if (!validateEmail(formData.email)) {
      errors.email = "Email exist";
   }

   if (!validateString(formData.companyName)) {
      errors.companyName = "....";
   }

   if (Object.keys(errors).length > 0) {
      return next({ message: errors, status: 409 });
   }

   next();
}

router.post("/register", validateRegister, async (_request, _response, next) => {
   try {
      await addToFileContent("./data/users.json", NewUserObject);

      _response.status(201).json({
         success: true,
         message: "user created",
      });
   } catch (error) {
      next({
         message: error.message,
         status: 500,
      });
   }
});

router.post("/login", async (_request, _response) => {
   try {
      const { username, email } = _request.body;

      const foundUser = await userLogin(email, username);

      if (foundUser) {
         _response.status(200).json({
            url: _request.url,
            success: true,
            data: foundUser,
            message: "Login success",
         });

         return;
      }

      next({
         status: 401,
         message: "Login fail",
      });
   } catch (error) {
      next({
         status: 500,
         message: error.message,
      });
   }
});

module.exports = router;
