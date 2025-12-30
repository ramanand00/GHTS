const express = require("express");
const Teacher = require("../models/Teacher");
const upload = require("../middleware/upload");

const router = express.Router();

/**
 * @route POST /api/teachers/register
 * @desc Register new teacher
 */
router.post(
  "/register",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "documents", maxCount: 5 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        email,
        contact,
        address,
        citizenshipNo,
        citizenshipIssueDate,
        qualification,
        experience,
        teachingTime,
        classType,
      } = req.body;

      if (!req.files.resume || !req.files.photo) {
        return res.status(400).json({ message: "Resume and Photo are required" });
      }

      const teacher = new Teacher({
        name,
        email,
        contact,
        address,
        citizenshipNo,
        citizenshipIssueDate,
        qualification,
        experience,
        teachingTime,
        classType,
        resume: req.files.resume[0].path,
        photo: req.files.photo[0].path,
        documents: req.files.documents?.map((f) => f.path) || [],
        acceptedTerms: true,
      });

      await teacher.save();

      res.status(201).json({
        message: "Teacher registered successfully",
        teacherId: teacher._id,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
