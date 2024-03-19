const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const PORT = 3354;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
