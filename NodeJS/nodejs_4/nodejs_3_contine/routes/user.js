const router = require("express").Router();

const { getUsers } = require("../services/users");

router.get("/profile/get-profile-data", async (_request, _response) => {
   const { username, email } = _request.query;

   _response.status(200).json({
      data: (await getUsers()).find((e) => e.username == username && e.email == email),
      success: true,
   });
});

module.exports = router;
