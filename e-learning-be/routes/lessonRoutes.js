const express = require("express");
const Lesson = require("../models/Lesson");

const router = express.Router();

// Add Lesson to Course
router.post("/add", async (req, res) => {
  try {
    const { title, content, videoUrl, course } = req.body;
    const lesson = new Lesson({ title, content, videoUrl, course });
    await lesson.save();
    res.status(201).json({ message: "Lesson added successfully", lesson });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
