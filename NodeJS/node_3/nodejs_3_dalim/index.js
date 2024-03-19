const express = require("express");

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const { GetFileContent, AddToFileContent } = require("./utils");
async function getUsers() {
   try {
      const data = await GetFileContent("./Data/Users.json");
      return data;
   } catch (e) {
      console.log(e);
      throw e;
   }
};

const app = express();

const PORT = 6644;

function middleware(_request, _response, next) {
   console.log("middleware function");

   next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((_request, _response, next) => {
   console.log(_request.method);
   console.log(_request.url);
   console.log(`${new Date().toLocaleDateString()}:${new Date().toLocaleTimeString()}`);
   console.log();

   next();
});

app.get("/", middleware, (_request, _response) => {
   _response.sendFile(__dirname + "/client/home.html");
});

app.get("/about", (_request, _response) => {
   _response.sendFile(__dirname + "/client/about.html");
});

app.get("/contact", middleware, (_request, _response) => {
   _response.sendFile(__dirname + "/client/contact.html");
});

app.get("/register", async (_request, _response) => {
   _response.sendFile(__dirname + "/client/register.html");
});

app.get("/profile/get-profile-data", async (_request, _response) => {
   const { username, email } = _request.query;

   _response.statusCode = 200;
   _response.json({
      data:
         (await getUsers()).find(e => e.username == username && e.email == email),
      success: true
   });
});

app.get("/profile", async (_request, _response) => {
   try {
      const { username, email } = _request.query;

      const foundUser = (await getUsers()).find((user) => user.username === username && user.email === email);
      if (foundUser) {
         _response.sendFile(__dirname + "/client/profile.html");
         return;
      }
      _response.status(401).json({
         url: _request.url,
         success: false,
         data: null,
         message: "You are not allowed visit this page",
      });
   } catch (e) {

      _response.status(500).json({

      })
    
   }
});


function validateEmail(email){

}

function stringValidate(){}

app.post("/register", async (_request, _response) => {
   try {
      const wrongFields = [];
      async function checkData(key, value) {
         if (value) {
            if (key == "Email" && emailRegex.test(value)) {
               return value;
            } else if (key == "Username" && !((await getUsers()).find(e => e.username === value))) {
               return value;
            }
            else if (key !== "Username" && key !== "Email") {
               return value;
            } else {
               wrongFields.push(key);
               return false;
            }
         } else {
            wrongFields.push(key);
            return false;
         }
      }

      const formData = _request.body;
      const NewUserObject = {
         id: (await getUsers()).length + 1,
         name: await checkData("Name", formData.Name),
         username: await checkData("Username", formData.Username),
         email: await checkData("Email", formData.Email),
         address: {
            street: await checkData("Street", formData.Street),
            suite: await checkData("Suite", formData.Suite),
            city: await checkData("City", formData.City),
            zipcode: await checkData("Zipcode", formData.Zipcode),
         },
         phone: await checkData("Phone", formData.Phone),
         website: await checkData("Website", formData.Website),
         company: {
            name: await checkData("companyName", formData.companyName),
            catchPhrase: await checkData("companyCatchPhrase", formData.companyCatchPhrase),
            bs: await checkData("companyBs", formData.companyBs),
         },
      };

      if (wrongFields.length > 0) {
         _response.statusCode = 409;
         _response.json(wrongFields);
      } else {
         await AddToFileContent("./Data/Users.json", NewUserObject);
         _response.statusCode = 201;
         _response.json({
            success: true,
            message: "user created"
         });
      }
   } catch (e) {
      throw e;
   }
});

app.post("/login", async (_request, _response) => {
   try {
      const { username, email } = _request.body;

      const foundUser = (await getUsers()).find((user) => user.username === username && user.email === email);

      if (foundUser) {
         _response.status(200).json({
            url: _request.url,
            success: true,
            data: foundUser,
            message: "Login success",
         });

         return;
      }

      _response.status(401).json({
         url: _request.url,
         success: false,
         data: null,
         message: "Login fail",
      });
   } catch (e) {
      throw new Error(e);
   }
});

app.use("*", (_request, _response) => {
   _response.status(404).json({
      url: _request.url,
      success: false,
      data: "Not found",
   });
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
