const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const homeHandler = require("./routes/home");
const adminHandler = require("./routes/admin").route;

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(homeHandler);
app.use("/admin", adminHandler);

app.use(express.static(path.join(__dirname, "public")));

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000);
