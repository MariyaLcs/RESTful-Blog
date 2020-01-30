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

Blog.create({
  title: "Green Park",
  image:
    "https://images.unsplash.com/photo-1446844805183-9f5af45f89ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
  body: "Hello this is a blog post"
});
//RESTful Routes

app.listen(process.env.PORT || 3000, function() {
  console.log("Server has started!");
});
