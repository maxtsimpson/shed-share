const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  deployedURL: { type: String, required: true },
  gitHubURL: { type: String, required: true },
  tags: [{type: String}],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
