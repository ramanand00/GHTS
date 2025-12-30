import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TeacherRegister from "./pages/TeacherRegister";
import AdminDashboard from "./admin/AdminDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeacherRegister />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
