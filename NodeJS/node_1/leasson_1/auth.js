const readLine = require("readline");
const { readFiles, writeFiles } = require("./utils");

const USERS_PATH = "./users.json";
const TASKS_PATH = "./tasks.json";

const interface = readLine.createInterface({ input: process.stdin, output: process.stdout });

function askQuestion(question) {
   return new Promise((resolve, reject) => {
      interface.question(question, (result, error) => {
         if (error) {
            reject(error);
         } else {
            resolve(result);
         }
      });
   });
}

const menu = `
for register press 1
for login press 2
for exit press 3
`;

async function register(users) {
   try {
      const username = await askQuestion("Enter your username: ");
      const password = await askQuestion("Enter your password: ");

      const foundUser = users.find((_user) => _user.username === username);

      if (foundUser) {
         console.log("Username exist");
         register(users);
      } else {
         const newUser = {
            id: Math.floor(Math.random() * 100000000),
            username: username,
            password: password,
         };

         users.push(newUser);

         await writeFiles(USERS_PATH, users);

         console.log("Register success");
      }
   } catch (error) {
      console.log(error);
   }
}

async function login(users) {
   try {
      const username = await askQuestion("username: ");
      const password = await askQuestion("password: ");

      const foundUser = users.find((_user) => _user.username === username && _user.password === password);

      if (foundUser) {
         console.log("Login success");
      } else {
         console.log("Invalid credential");
         login(users);
      }
   } catch (error) {
      console.log(error);
   }
}

async function main(users) {
   const chosen = await askQuestion(menu);
   if (!users) {
      users = await readFiles(USERS_PATH);
   }

   switch (chosen) {
      case "1":
         await register(users);
         break;
      case "2":
         await login(users);
         break;
      case "3":
         interface.close();
         break;
      default:
         main(users);
   }
}

main(null);

// async function main() {
//    try {
//       const users = await readFiles(USERS_PATH);

//       while (true) {
//          const userName = await askQuestion("What is your name? ");

//          const foundUser = users.find((_user) => _user.name === userName);

//          if (foundUser) {
//             console.log("Username exist");
//          } else {
//             const newUser = {
//                id: Math.floor(Math.random() * 100000000),
//                name: userName,
//             };

//             users.push(newUser);

//             await writeFiles(USERS_PATH, users);
//             console.log("Register success");

//             interface.close();
//             break;
//          }
//       }
//    } catch (error) {
//       console.log(error);
//    }
// }

// main();
