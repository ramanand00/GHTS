const multer = require("multer");
const path = require("path");
const fs = require("fs");

const createFolder = (folder) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads/documents";

    if (file.fieldname === "resume") folder = "uploads/resumes";
    if (file.fieldname === "photo") folder = "uploads/photos";
    if (file.fieldname === "citizenshipFront" || file.fieldname === "citizenshipBack") 
      folder = "uploads/citizenship";

    createFolder(folder);
    cb(null, folder);
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images, PDFs, and Word documents are allowed.'));
    }
  }
});

module.exports = upload;