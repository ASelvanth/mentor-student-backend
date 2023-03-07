const express = require("express");
const router = express.Router();

const mentor = require('../models/mentor');

router.get("/", async (req, res) => {
//   console.log("get all mentors");
  try {
    const data = await mentor.find();
    res.send(data);
  } catch (error) {
    console.log(error, "error");
    res.status(500).send("Internal server Error");
  }
});

router.post("/", async (req, res) => {
//   console.log("mentor create route");
  try {
    const data = await mentor.create({
      name: req.body.name,
      email: req.body.email,
      expertise: req.body.expertise,
      studentsAssigned: req.body.studentsAssigned,
    });
    res.send(data);
  } catch (error) {
    // console.log(e, "error");
    res.status(500).send("Internal server Error");
  }
});

router.get("/:id", async (req, res) => {
//   console.log("show all students for particular mentor");
  try {
    const ment = await mentor
      .findById(req.params.id)
      .populate("studentsAssigned", "name");
    res.send(ment);
  } catch (error) {
    console.log(error, "error");
    res.status(500).send("Intyernal error");
  }
});

module.exports = router;