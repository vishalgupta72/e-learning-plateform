const express = require("express");
const Course = require("../models/Course");
const User = require("../models/User");

const router = express.Router();

// Create Course
router.post("/create", async (req, res) => {
  try {
    const { title, description, instructor, category, price } = req.body;
    const course = new Course({ title, description, instructor, category, price });
    await course.save();
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructor lessons");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
