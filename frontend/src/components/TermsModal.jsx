export default function TermsModal({ open, onClose, onAccept }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-3xl w-full rounded shadow-lg p-6 overflow-y-auto max-h-[80vh]">
        
        <h2 className="text-xl font-bold mb-4">
          Terms & Conditions – Gravity Home Tuition Solution
        </h2>

        <div className="space-y-4 text-sm text-gray-700">
          
          <p>
            <b>1. Tutor Verification & Compliance (Company Safety)</b><br />
            All tutors must submit valid government ID, academic certificates, and background details.
            Tutors must sign a Code of Conduct and Confidentiality Agreement.
            Tutors act as independent service providers unless otherwise stated.
            Any false or misleading information will result in immediate removal from the platform.
          </p>

          <p>
            <b>2. Parent & Student Safety Measures</b><br />
            Tutor details (name, photo, qualifications, and contact information) will be shared with parents before classes begin.
            The first session is recommended as a trial/demo class.
            Tutors must teach only in common areas of the house and not in locked rooms.
            Parents or guardians are encouraged to be present at home during sessions.
          </p>

          <p>
            <b>3. Class Conduct Rules (Zero-Risk Policy)</b><br />
            Strict zero tolerance for physical punishment, verbal abuse, or inappropriate behavior.
            Tutors must not impose personal, political, or religious views on students.
            No photos or videos of students may be taken without written parental consent.
            Private meetings outside scheduled class hours are not permitted.
          </p>

          <p>
            <b>4. Payment & Financial Protection</b><br />
            All payments must be made through the company platform only.
            Advance fees are non-refundable once classes begin, except in cases approved by the company.
            The company is not responsible for any private or cash transactions.
            Tutor payments are released only after confirmed class completion.
          </p>

          <p>
            <b>5. Scheduling & Attendance</b><br />
            Class schedules must be mutually agreed upon and registered with the company.
            Tutors must provide at least 24 hours’ notice for cancellations.
            Repeated absences without notice may lead to service termination.
            Make-up classes depend on tutor availability.
          </p>

          <p>
            <b>6. Liability Limitation (Company Protection)</b><br />
            The company acts solely as a service facilitator.
            Any incident or concern must be reported immediately to the company.
            The company is not responsible for loss or damage of personal property.
            Legal responsibility lies with the individual involved in misconduct.
          </p>

          <p>
            <b>7. Data Privacy & Confidentiality</b><br />
            Student and parent data will be used strictly for academic and service-related purposes.
            Tutors may not share student information with any third party.
            All records are handled under basic data protection standards.
          </p>

          <p>
            <b>8. Termination Policy</b><br />
            Parents may request a tutor change for valid reasons.
            The company may replace or remove tutors based on performance or complaints.
            Immediate termination applies in cases of misconduct, fraud, or safety violations.
          </p>

          <p>
            <b>9. Dispute Resolution</b><br />
            All disputes must first be addressed through company mediation.
            Legal action, if required, will follow applicable local jurisdiction laws.
            Verbal agreements outside company policy are not recognized.
          </p>

          <p>
            <b>10. Agreement Acceptance</b><br />
            Use of this service confirms acceptance of all terms and conditions.
            The company reserves the right to modify these policies when necessary.
          </p>

        </div>

        {/* Footer Info */}
        <div className="mt-6 pt-4 border-t text-xs text-gray-500 flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>Last Updated: 12/30/2025</span>
          <span>
            Designed by <b>Ramanand Mandal</b> – DevOps Engineer
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            I Accept
          </button>
        </div>

      </div>
    </div>
  );
}
