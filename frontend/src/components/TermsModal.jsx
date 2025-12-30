export default function TermsModal({ open, onClose, onAccept }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-3xl w-full rounded shadow-lg p-6 overflow-y-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">
          Terms & Conditions – Gravity Home Tuition Solution
        </h2>

        <div className="space-y-3 text-sm text-gray-700">
          <p><b>1. Tutor Verification & Compliance</b><br />
            All tutors must submit valid documents. False information leads to immediate termination.
          </p>

          <p><b>2. Parent & Student Safety</b><br />
            Tutor details will be shared with parents. Trial classes are recommended.
          </p>

          <p><b>3. Class Conduct Rules</b><br />
            Zero tolerance for abuse, misconduct, or inappropriate behavior.
          </p>

          <p><b>4. Payment & Financial Protection</b><br />
            All payments must go through the company.
          </p>

          <p><b>5. Scheduling & Attendance</b><br />
            24-hour notice required for cancellations.
          </p>

          <p><b>6. Liability Limitation</b><br />
            Company is a facilitator only.
          </p>

          <p><b>7. Data Privacy</b><br />
            Data used strictly for academic purposes.
          </p>

          <p><b>8. Termination Policy</b><br />
            Misconduct results in immediate termination.
          </p>

          <p><b>9. Dispute Resolution</b><br />
            Disputes resolved via company mediation.
          </p>

          <p><b>10. Agreement Acceptance</b><br />
            Acceptance of all terms is mandatory.
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
}
