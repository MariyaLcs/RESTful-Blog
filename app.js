var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express();

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// title
// image
// body
// created

app.listen(process.env.PORT || 3000, function() {
  console.log("Server has started!");
});
