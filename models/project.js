const mongoose = require("mongoose");
const Step = require("./step")
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  title: { type: String, required: true },
  steps: [Step],
  tags: [{type: String}],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
