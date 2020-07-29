const Schema = require("mongoose").Schema;

const StepSchema = new Schema({
  description: { type: String, required: true },
  category: {
    title: { type: String, required: true },
    icon: { type: String }
  },
  videoLink: String,
  img: String,
},
  { timestamps: true });

module.exports = StepSchema