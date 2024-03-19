const express = require("express");

const app = express();

const PORT = 6644;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((_request, _response, next) => {
   console.log(_request.method);
   console.log(_request.url);
   console.log(`${new Date().toLocaleDateString()}:${new Date().toLocaleTimeString()}`);

   _request.user = {
      name: "Avi",
   };

   next();
});

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));

app.use("*", (_request, _response, next) => {
   next({
      message: "Not found",
      status: 404,
   });
});

app.use((error, _request, _response, next) => {
   console.log(error);

   _response.status(error.status).json({
      success: false,
      message: error.message,
      url: _request.url,
      data: null,
      status: error.status,
   });
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
