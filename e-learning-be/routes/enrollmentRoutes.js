const express = require("express");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

// Enroll in a Course
router.post("/enroll", async (req, res) => {
  try {
    const { student, course } = req.body;
    const enrollment = new Enrollment({ student, course });
    await enrollment.save();
    res.status(201).json({ message: "Enrolled successfully", enrollment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Enrolled Courses for a Student
router.get("/student/:id", async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.params.id }).populate("course");
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
