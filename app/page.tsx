"use client";

import { useState, useEffect } from "react";
import ClickableSquares from "./components/squares";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(true);

  // update time every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // date and time
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <main
      className="w-screen h-screen bg-cover bg-center relative font-sans"
      style={{ backgroundImage: "url('/desktop-bg.png')" }}
    >
      {/* squares */}
      <ClickableSquares />

      {/* ===== MODAL OVERLAY ===== */}
      {showModal && (
        <div className="absolute inset-0 z-999 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 w-[350px] text-center border border-gray-200">
            
            {/* Title */}
            <h1
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-pixelify)" }}
            >
              hallo there -_-
            </h1>

            {/* Message */}
            <p
              className="text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              The website is currently under construction. Kindly visit again in
              <span className="font-semibold"> 3 days</span> and it should be final.
              <br />
              Sorry for the inconvenience!
            </p>

            {/* close button */}
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[#00A5CF] text-white rounded-lg hover:bg-[#028bb1] transition"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Okay!
            </button>
          </div>
        </div>
      )}

      {/* bottom bar */}
      <div
        className="absolute bottom-0 w-full h-[50px] flex items-center justify-between px-6"
        style={{ background: "linear-gradient(to bottom, #F4F4F4, #00A5CF)" }}
      >
        {/* logo */}
        <img src="/logo.png" alt="Logo" className="ml-2 h-9 object-contain" />

        {/* date + time */}
        <div
          className="flex items-center gap-4 text-white font-medium text-sm"
          style={{ fontFamily: "var(--font-pixelify)" }}
        >
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </div>
      </div>
    </main>
  );
}
