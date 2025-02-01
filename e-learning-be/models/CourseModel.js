const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
    category: { type: String, required: true },
    price: { type: Number, required: true },
    studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "Enrollment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
