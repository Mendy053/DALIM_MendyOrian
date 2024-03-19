const router = require("express").Router();

router.get("/", (_request, _response, next) => {
   try {
      _response.render("pages/home", { name: "First ejs app" });
   } catch (error) {
      console.log(error);
   }
});

router.get("/login", (_request, _response, next) => {
   try {
      _response.render("pages/login", {
         errorMessage: null,
      });
   } catch (error) {
      console.log(error);
   }
});

module.exports = router;
