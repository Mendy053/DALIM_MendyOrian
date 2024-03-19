const { users } = require("../data");

const router = require("express").Router();

router.post("/login", (_request, _response, next) => {
   try {
      const { username, password } = _request.body;

      const foundUser = users.find((user) => user.password === password && user.username === username);

      if (foundUser) {
         return _response.render("pages/profile", { username: foundUser.username, posts: foundUser.posts });
      }

      let errorMessage = null;

      if (!foundUser || !username || !password) {
         errorMessage = "Invalid credentials";
      }

      _response.render("pages/login", { errorMessage: errorMessage });
   } catch (error) {
      console.log(error);
   }
});

module.exports = router;
