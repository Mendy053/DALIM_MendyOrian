const { getUsers, userLogin } = require("../services/users");
const path = require("path");

const router = require("express").Router();

router.get("/", (_request, _response, next) => {
   _response.sendFile(path.join(__dirname, "../client", "home.html"));
});

router.get("/register", (_request, _response) => {
   _response.sendFile(path.join(__dirname, "../client", "register.html"));
});

router.get("/about", (_request, _response) => {
   _response.sendFile(path.join(__dirname, "../client", "about.html"));
});

router.get("/contact", (_request, _response) => {
   _response.sendFile(path.join(__dirname, "../client", "contact.html"));
});

router.get("/profile", async (_request, _response) => {
   try {
      const { username, email } = _request.query;

      const foundUser = await userLogin(email, username);

      if (foundUser) {
         _response.sendFile(path.join(__dirname, "../client", "profile.html"));
         return;
      }

      next({
         status: 401,
         message: "You are not allowed visit this page",
      });
   } catch (error) {
      next({
         status: 500,
         message: error.message,
      });
   }
});

module.exports = router;
