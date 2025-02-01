const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
    coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "Enrollment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
