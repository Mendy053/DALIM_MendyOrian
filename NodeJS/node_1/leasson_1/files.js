const { writeFiles, readFiles } = require("./utils");

const USERS_PATH = "./users.json";
const TASKS_PATH = "./tasks.json";

main();

async function main() {
   try {
      const users = await readFiles(USERS_PATH);
      //   const tasks = await readFiles(TASKS_PATH);
      //   console.log(users);
      //   console.log(tasks);
      const user = {
         id: Math.floor(Math.random() * 100000000000),
         name: "David",
      };
      users.push(user);

      await writeFiles(USERS_PATH, users);
   } catch (error) {
      console.log("ERROR");
   }
}
