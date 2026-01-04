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
    { name: "citizenshipFront", maxCount: 1 },
    { name: "citizenshipBack", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "documents", maxCount: 10 },
  ]),
  async (req, res) => {
    console.log("=== REGISTRATION REQUEST RECEIVED ===");
    console.log("Body fields:", req.body);
    console.log("Files received:", req.files ? Object.keys(req.files) : "No files");
    
    try {
      const {
        name,
        email,
        contact,
        address,
        citizenshipNo,
        citizenshipIssueDate,
        willingToTravel,
        maxTravelDistance,
        qualification,
        experience,
        expectedSalary,
        hourlyRate,
        teachingTime,
        classType,
        membership
      } = req.body;

      // Check required files
      if (!req.files) {
        console.error("No files uploaded");
        return res.status(400).json({ 
          message: "No files uploaded",
          required: ["citizenshipFront", "citizenshipBack", "resume", "photo"]
        });
      }

      if (!req.files.citizenshipFront || !req.files.citizenshipBack || !req.files.resume || !req.files.photo) {
        console.error("Missing required files:", {
          citizenshipFront: !!req.files.citizenshipFront,
          citizenshipBack: !!req.files.citizenshipBack,
          resume: !!req.files.resume,
          photo: !!req.files.photo
        });
        return res.status(400).json({ 
          message: "All required files are needed",
          missing: [
            !req.files.citizenshipFront && "citizenshipFront",
            !req.files.citizenshipBack && "citizenshipBack",
            !req.files.resume && "resume",
            !req.files.photo && "photo"
          ].filter(Boolean)
        });
      }

      // Parse array fields
      let locations = req.body.locations;
      let educationLevels = req.body.educationLevels;
      let subjects = req.body.subjects;

      // Handle array fields (they might come as strings or arrays)
      if (typeof locations === 'string') {
        try {
          locations = JSON.parse(locations);
        } catch {
          locations = [locations];
        }
      } else if (!Array.isArray(locations)) {
        locations = locations ? [locations] : [];
      }

      if (typeof educationLevels === 'string') {
        try {
          educationLevels = JSON.parse(educationLevels);
        } catch {
          educationLevels = [educationLevels];
        }
      } else if (!Array.isArray(educationLevels)) {
        educationLevels = educationLevels ? [educationLevels] : [];
      }

      if (typeof subjects === 'string') {
        try {
          subjects = JSON.parse(subjects);
        } catch {
          subjects = [subjects];
        }
      } else if (!Array.isArray(subjects)) {
        subjects = subjects ? [subjects] : [];
      }

      console.log("Parsed array fields:", {
        locations,
        educationLevels,
        subjects
      });

      // Create teacher document
      const teacher = new Teacher({
        // Personal Information
        name,
        email,
        contact,
        address,
        
        // Citizenship Details
        citizenshipNo,
        citizenshipIssueDate,
        citizenshipFront: req.files.citizenshipFront[0].path,
        citizenshipBack: req.files.citizenshipBack[0].path,
        
        // Teaching Location
        locations,
        willingToTravel,
        maxTravelDistance: maxTravelDistance ? parseInt(maxTravelDistance) : 5,
        
        // Professional Details
        qualification,
        experience: parseInt(experience) || 0,
        educationLevels,
        subjects,
        expectedSalary: parseInt(expectedSalary) || 0,
        hourlyRate: hourlyRate ? parseInt(hourlyRate) : null,
        teachingTime,
        classType,
        
        // Membership
        membership,
        
        // Documents
        resume: req.files.resume[0].path,
        photo: req.files.photo[0].path,
        documents: req.files.documents?.map((f) => f.path) || [],
        
        // Terms & Status
        acceptedTerms: true,
      });

      console.log("Saving teacher to database...");
      await teacher.save();
      console.log("Teacher saved successfully:", teacher._id);

      res.status(201).json({
        success: true,
        message: "Teacher registered successfully",
        teacherId: teacher._id,
        data: {
          name: teacher.name,
          email: teacher.email,
          status: teacher.status
        }
      });

    } catch (error) {
      console.error("❌ Registration error details:", error);
      
      // Mongoose validation error
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message);
        return res.status(400).json({
          success: false,
          error: 'Validation Error',
          messages: errors
        });
      }
      
      // Duplicate key error
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          error: 'Duplicate Entry',
          message: 'Email already registered'
        });
      }

      res.status(500).json({
        success: false,
        error: 'Server Error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
);

// GET all teachers (for testing)
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find()
      .select("name email contact status createdAt")
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      count: teachers.length,
      data: teachers
    });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// GET single teacher by ID
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found"
      });
    }
    res.json({
      success: true,
      data: teacher
    });
  } catch (error) {
    console.error("Error fetching teacher:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;