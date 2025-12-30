import { useState } from "react";
import axios from "axios";
import TermsModal from "../components/TermsModal";

export default function TeacherRegister() {
  const [showTerms, setShowTerms] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accepted) {
      alert("You must accept the Terms & Conditions");
      return;
    }

    const formData = new FormData(e.target);

    try {
      await axios.post("http://localhost:5000/api/teachers/register", formData);
      alert("Application submitted successfully!");
      e.target.reset();
      setAccepted(false);
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Card with Logo */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-emerald-100">
          <div className="md:flex">
            {/* Logo Section */}
            <div className="md:w-1/4 bg-gradient-to-br from-emerald-700 to-emerald-900 p-8 flex flex-col items-center justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <img 
                  src="/assets/logo.jpg" // Try different paths if this doesn't work
                  alt="Gravity Home Tuition Logo" 
                  className="w-40 h-40 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/160x160/059669/ffffff?text=Gravity+Logo";
                  }}
                />
              </div>
              <h2 className="text-white text-center font-bold text-xl tracking-wide">Gravity Home Tuition</h2>
              <p className="text-emerald-100 text-sm mt-2 text-center">Quality Education at Home</p>
            </div>
            
            {/* Header Content */}
            <div className="md:w-3/4 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-emerald-800 mb-2">
                  Teacher Registration Form
                </h1>
                <p className="text-emerald-600">
                  Join our elite team of professional home tutors and shape the future of education
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-4 rounded-lg border-l-4 border-emerald-500 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-800 mb-1">Contact Information</h3>
                      <p className="text-sm text-emerald-700">KL Tower (3rd Floor), Chabahil, Kathmandu</p>
                      <p className="text-sm text-emerald-700">gravitytuition@gmail.com |+977-9841567153</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-emerald-50 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-1">Why Join Our Team?</h3>
                      <p className="text-sm text-amber-700">Flexible Schedule • Competitive Pay • Professional Growth</p>
                      <p className="text-sm text-amber-700">Supportive Environment • Regular Training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-emerald-100">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-800 mb-1">Application Form</h2>
                <p className="text-emerald-600">
                  Please fill out all required information accurately. Fields marked with * are mandatory.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="border-b pb-6 border-emerald-100">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
                <span className="bg-emerald-100 text-emerald-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Full Name *
                  </label>
                  <input 
                    name="name" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="Enter your full name"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Email Address *
                  </label>
                  <input 
                    name="email" 
                    type="email" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="example@email.com"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Contact Number *
                  </label>
                  <input 
                    name="contact" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="+977 98XXXXXXXX"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Address *
                  </label>
                  <input 
                    name="address" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="Full address"
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Citizenship Details Section */}
            <div className="border-b pb-6 border-emerald-100">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
                <span className="bg-emerald-100 text-emerald-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Citizenship Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Citizenship Number *
                  </label>
                  <input 
                    name="citizenshipNo" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="00-00-000000"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Citizenship Issue Date *
                  </label>
                  <input 
                    type="date" 
                    name="citizenshipIssueDate" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400 text-emerald-700"
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Professional Details Section */}
            <div className="border-b pb-6 border-emerald-100">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
                <span className="bg-emerald-100 text-emerald-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                Professional Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Academic Qualification *
                  </label>
                  <input 
                    name="qualification" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="e.g., Bachelors in Science"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Teaching Experience (Years) *
                  </label>
                  <input 
                    name="experience" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="e.g., 3"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Preferred Teaching Time
                  </label>
                  <input 
                    name="teachingTime" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition placeholder-emerald-400"
                    placeholder="Morning / Evening / Flexible" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Class Type *
                  </label>
                  <select 
                    name="classType" 
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition text-emerald-700"
                    required
                  >
                    <option value="" className="text-emerald-400">Select Class Type</option>
                    <option value="physical">Physical (In-person)</option>
                    <option value="online">Online</option>
                    <option value="both">Both Physical & Online</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Documents Upload Section */}
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4 flex items-center">
                <span className="bg-emerald-100 text-emerald-600 p-3 rounded-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                Documents Upload
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Resume (PDF only) *
                  </label>
                  <div className="border-2 border-dashed border-emerald-200 rounded-lg p-6 hover:border-emerald-400 transition bg-emerald-50">
                    <input 
                      type="file" 
                      name="resume" 
                      accept=".pdf" 
                      className="w-full"
                      required 
                    />
                    <p className="text-sm text-emerald-600 mt-3 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Upload your resume in PDF format
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Recent Photo *
                  </label>
                  <div className="border-2 border-dashed border-emerald-200 rounded-lg p-6 hover:border-emerald-400 transition bg-emerald-50">
                    <input 
                      type="file" 
                      name="photo" 
                      accept="image/*" 
                      className="w-full"
                      required 
                    />
                    <p className="text-sm text-emerald-600 mt-3 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Upload a recent passport size photo
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-emerald-700">
                    Additional Documents (Optional)
                  </label>
                  <div className="border-2 border-dashed border-emerald-200 rounded-lg p-6 hover:border-emerald-400 transition bg-emerald-50">
                    <input 
                      type="file" 
                      name="documents" 
                      multiple 
                      className="w-full"
                    />
                    <p className="text-sm text-emerald-600 mt-3">
                      You can upload multiple files (Certificates, Recommendation Letters, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gradient-to-r from-emerald-50 to-amber-50 p-6 rounded-lg border border-emerald-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={accepted}
                    onChange={() => setAccepted(!accepted)}
                    className="h-6 w-6 text-emerald-600 rounded focus:ring-emerald-500 border-emerald-300"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="terms" className="text-emerald-800 font-medium">
                    I hereby declare that all information provided is true and accurate to the best of my knowledge.
                  </label>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setShowTerms(true)}
                      className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-lg transition"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Read Terms & Conditions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!accepted}
                className={`px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center ${
                  accepted 
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-emerald-100 text-emerald-400 cursor-not-allowed'
                }`}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
                Submit Application
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-emerald-600 text-sm bg-white p-4 rounded-lg border border-emerald-100">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="font-semibold">Your information is secure with us</p>
          </div>
          <p>© {new Date().getFullYear()} Gravity Home Tuition Solution. All rights reserved.</p>
          <p className="mt-1">Your application will be reviewed within 3-5 business days</p>
        </div>
      </div>

      <TermsModal
        open={showTerms}
        onClose={() => setShowTerms(false)}
        onAccept={() => {
          setAccepted(true);
          setShowTerms(false);
        }}
      />
    </div>
  );
}