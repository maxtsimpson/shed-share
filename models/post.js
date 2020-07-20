//this schema refers to a blog post on my portfolio. probably not going to use it just yet
//need to do a little more research in to the best way to store them

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  body: String,
  videoLink: String,
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
