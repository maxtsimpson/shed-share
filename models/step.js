const Schema = require("mongoose").Schema;

const StepSchema = new Schema({
  description: { type: String, required: true },
  category: { 
      title: {type: String, required: true} ,
      icon: {type: String, required: true} 
    },
  videoLink: String,
  img: String,
});

module.exports = StepSchema