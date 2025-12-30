const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },

    citizenshipNo: { type: String, required: true },
    citizenshipIssueDate: { type: Date, required: true },

    qualification: { type: String, required: true },
    experience: { type: String, required: true },

    teachingTime: String,
    classType: {
      type: String,
      enum: ["physical", "online", "both"],
      required: true,
    },

    resume: { type: String, required: true },
    photo: { type: String, required: true },
    documents: [String],

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
