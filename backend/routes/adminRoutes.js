const express = require("express");
const Teacher = require("../models/Teacher");

const router = express.Router();

/**
 * GET all teachers
 */
router.get("/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 });
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * UPDATE teacher status (approve/reject)
 */
router.patch("/teachers/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const teacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
