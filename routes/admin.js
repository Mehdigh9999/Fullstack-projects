const express = require("express");
const routes = express.Router();
const path = require("path");

const content = [];

routes.get("/user", (req, res, next) => {
  console.log("Admin user route get accessed"); // Log access to the route
  res.render("admin", { pageTitle: "Admin" }); // Render the admin view
});

routes.post("/user", (req, res, next) => {
  console.log("Admin user route post accessed"); // Log access to the route
  res.redirect("/");
  content.push({ name: req.body.title, paragraph: req.body.text }); // Corrected to match the input field name

});

exports.route = routes;
exports.context = content;
