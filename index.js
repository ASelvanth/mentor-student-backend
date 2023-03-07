require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/connect");

const studentRoute = require("./routes/studentRoute");
const mentorRoute = require("./routes/mentorRoute");
const assignMentortoStudent = require("./routes/assignMentorToStudent");

const app = express();

//DB connection 
db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home page !! -  Mentor student backend");
});

//Routes
app.use("/api/student", studentRoute);
app.use("/api/mentor", mentorRoute);
app.use("/api/assignmentor", assignMentortoStudent);

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`App is running on port ${PORT}`);            
});