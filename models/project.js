const mongoose = require("mongoose");
const Step = require("./step")
const Schema = mongoose.Schema;


const projectSchema = new Schema({
  title: { type: String, required: true },
  displayPic: { type:Buffer, required: true },
  steps: [Step],
  tags: [{type: String}],
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
});


projectSchema.virtual('user', {
  ref: "User",
  localField: 'user_id',
  foreignField: '_id',
  justOne: true
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
