const { getFileContent } = require("../utils");

async function getUsers() {
   try {
      const data = await getFileContent("../data/users.json");
      return data;
   } catch (error) {
      throw error;
   }
}

async function userLogin(email, username) {
   try {
      const foundUser = (await getUsers()).find((user) => user.username === username && user.email === email);
      return foundUser;
   } catch (error) {
      throw error;
   }
}

module.exports = {
   getUsers: getUsers,
   userLogin: userLogin,
};
