const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    // Personal Information
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },

    // Citizenship Details
    citizenshipNo: { type: String, required: true },
    citizenshipIssueDate: { type: Date, required: true },
    citizenshipFront: { type: String, required: true },
    citizenshipBack: { type: String, required: true },

    // Teaching Location
    locations: [{ type: String, required: true }],
    willingToTravel: { 
      type: String, 
      enum: ["yes", "no"],
      required: true 
    },
    maxTravelDistance: { 
      type: Number, 
      min: 1, 
      max: 20,
      default: 5 
    },

    // Professional Details
    qualification: { type: String, required: true },
    experience: { type: Number, required: true },
    educationLevels: [{ type: String, required: true }],
    subjects: [{ type: String, required: true }],
    expectedSalary: { type: Number, required: true },
    hourlyRate: { type: Number },
    teachingTime: { type: String },
    classType: {
      type: String,
      enum: ["physical", "online", "both"],
      required: true,
    },

    // Membership
    membership: {
      type: String,
      enum: ["yes", "no"],
      required: true
    },

    // Documents
    resume: { type: String, required: true },
    photo: { type: String, required: true },
    documents: [String],

    // Terms & Status
    acceptedTerms: {
      type: Boolean,
      required: true,
      default: false,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);