import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show after 5.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleViewPolicy = () => {
    setShowPopup(false); // Hide permanently until reload
    navigate("/privacy_policy"); // Go to privacy page
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-5 sm:right-auto z-50 bg-white border border-gray-300 shadow-xl rounded-md p-4 text-sm text-gray-800 w-[calc(100%-2rem)] sm:w-80 max-w-sm animate-fade-in">
      
      <div className="flex justify-between items-start">
        <p className="font-medium text-gray-900">
          Want to read our Privacy Policy?
        </p>
        <button
          onClick={() => setShowPopup(false)}
          className="text-gray-400 hover:text-red-500 text-2xl leading-none ml-2"
        >
          ×
        </button>
      </div>

      <p className="mt-2 text-gray-600">
        Learn how we collect, use, and protect your data by reading our full policy.
      </p>

      <button
        onClick={handleViewPolicy}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full text-center text-sm"
      >
        View Privacy Policy
      </button>
    </div>
  );
};

export default PrivacyPopup;
