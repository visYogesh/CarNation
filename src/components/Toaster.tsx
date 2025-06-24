import { useEffect, useState } from "react";

type Props = {
  link: string;
};

export default function ServiceToast({ link }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      const autoClose = setTimeout(() => setShow(false), 9000);
      return () => clearTimeout(autoClose);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed top-40 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[85%] md:w-[60%] lg:w-[50%]">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 animate-slide-down-fade relative">
        
        {/* Mobile/Small: Button top-right */}
        <div className="absolute top-2 right-2 flex gap-2 sm:hidden">
          <button
            onClick={() => (window.location.href = link)}
            className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded-md transition"
          >
            Book
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md transition"
          >
            ✕
          </button>
        </div>

        {/* Toast Content */}
        <div className="text-sm sm:text-base text-gray-900 text-center sm:text-left w-full pr-16 sm:pr-0">
          <p className="font-semibold text-lg">
            💼 Want to book an appointment?{" "}
          </p>
            <span className="text-green-600 font-bold">Auto Repair</span> ✨
          {/* <p className="text-gray-600 text-left">We're just a click away!</p> */}
        </div>

        {/* Desktop: Buttons beside text */}
        <div className="hidden sm:flex gap-3 justify-center sm:justify-end">
          <button
            onClick={() => (window.location.href = link)}
            className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md transition"
          >
            Book
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-md transition"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
