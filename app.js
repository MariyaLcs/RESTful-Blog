var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express();

//APP Config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Mongoose/Model Config
var blogChema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogChema);

//RESTful Routes
app.get("/", function(req, res) {
  res.redirect("/blogs");
});

//INDEX Route
app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { blogs: blogs });
    }
  });
});

//NEW Route
app.get("/blogs/new", function(req, res) {
  res.render("new");
});

//CREARE Route
app.post("/blogs", function(req, res) {
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server has started!");
});
