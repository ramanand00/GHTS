import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/teachers");
      setTeachers(res.data);
    } catch (err) {
      console.error("Failed to fetch teachers:", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/admin/teachers/${id}/status`,
        { status }
      );
      fetchTeachers();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <div className="min-h-screen bg-white p-8 text-black">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold uppercase tracking-wide text-green-800">
          Teacher Application Review Register
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Official Administrative Record
        </p>
        <div className="border-b-4 border-yellow-600 mt-4 w-1/2 mx-auto" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black text-sm">
          <thead>
            <tr className="bg-gray-100">
              {[
                "Photo",
                "Name",
                "Email",
                "Contact",
                "Qualification",
                "Experience",
                "Teaching Time",
                "Class Type",
                "Documents",
                "Status",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="border border-black p-2 text-center font-semibold"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {teachers.map((t, index) => (
              <tr key={t._id}>
                {/* Photo */}
                <td className="border border-black p-2 text-center">
                  {t.photo ? (
                    <a
                      href={`http://localhost:5000/${t.photo}`}
                      target="_blank"
                      className="text-green-700 underline"
                    >
                      View
                    </a>
                  ) : (
                    "—"
                  )}
                </td>

                <td className="border border-black p-2">{t.name}</td>
                <td className="border border-black p-2">{t.email}</td>
                <td className="border border-black p-2">{t.contact}</td>
                <td className="border border-black p-2">
                  {t.qualification}
                </td>
                <td className="border border-black p-2">
                  {t.experience}
                </td>
                <td className="border border-black p-2">
                  {t.teachingTime || "Flexible"}
                </td>
                <td className="border border-black p-2">{t.classType}</td>

                {/* Documents */}
                <td className="border border-black p-2 text-center space-y-1">
                  {t.resume && (
                    <a
                      href={`http://localhost:5000/${t.resume}`}
                      target="_blank"
                      className="block underline text-green-700"
                    >
                      Resume
                    </a>
                  )}
                  {t.documents?.map((doc, idx) => (
                    <a
                      key={idx}
                      href={`http://localhost:5000/${doc}`}
                      target="_blank"
                      className="block underline text-green-700"
                    >
                      Document {idx + 1}
                    </a>
                  ))}
                </td>

                {/* Status */}
                <td className="border border-black p-2 text-center font-bold">
                  <span
                    className={`${
                      t.status === "approved"
                        ? "text-green-700"
                        : t.status === "rejected"
                        ? "text-red-700"
                        : "text-yellow-700"
                    } uppercase`}
                  >
                    {t.status}
                  </span>
                </td>

                {/* Action */}
                <td className="border border-black p-2 text-center space-y-1">
                  <button
                    onClick={() => updateStatus(t._id, "approved")}
                    className="border border-green-700 text-green-700 px-3 py-1 text-xs hover:bg-green-700 hover:text-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(t._id, "rejected")}
                    className="border border-red-700 text-red-700 px-3 py-1 text-xs hover:bg-red-700 hover:text-white"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {teachers.length === 0 && (
          <p className="text-center mt-6 text-gray-500">
            No records available
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="mt-10 text-xs text-gray-600 flex justify-between">
        <span>Generated by Admin Panel</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
}
