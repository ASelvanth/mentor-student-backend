const express = require("express");
const router = express.Router();

const student = require('../models/student');
const mentor = require('../models/mentor');


router.get("/", async (req, res) => {
//   console.log("Get all Students recors");
  try {
    const data = await student.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
//   console.log("Student create route");
  try {
    const data = await student.create({
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
      mentorAssigned: req.body.mentorAssigned,
    });
    res.send(data);
  } catch (error) {
    console.log(error.message, "error");
    res.status(500).send("internal error");
  }
});

module.exports = router;