const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    course: {
      type: String,
      required: true,
    },
    mentorAssigned: {
      type : mongoose.Schema.Types.ObjectId,      
      default: null,
      ref: "mentor",
    },
});

module.exports = mongoose.model("student", studentSchema);