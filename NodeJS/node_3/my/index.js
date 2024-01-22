const express = require("express");

const app = express();

app.listen(3939, () => {
    app.get("/",(req,res) => {
        res.status(200).sendFile("./index.html")
    })
});