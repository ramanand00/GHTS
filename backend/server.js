const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const teacherRoutes = require("./routes/teacherRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/teachers", teacherRoutes);
app.use("/api/admin", adminRoutes);
// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gravity-tuition', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
