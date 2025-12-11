"use client";

import { useState, useEffect } from "react";
import ClickableSquares from "./components/squares";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // update time every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // date and time
  const formattedTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <main
      className="w-screen h-screen bg-cover bg-center relative font-sans"
      style={{ backgroundImage: "url('/desktop-bg.png')" }}
    >
      {/* squares */}
      <ClickableSquares />

      {/* bottom bar */}
      <div
        className="absolute bottom-0 w-full h-[50px] flex items-center justify-between px-6"
        style={{ background: "linear-gradient(to bottom, #F4F4F4, #00A5CF)" }}
      >
        {/* logo - TODO pls change doesn't fit the vibes */}
        <img src="/logo.png" alt="Logo" className="ml-2 h-9 object-contain" />

        {/* date and time - Pixelify Sans */}
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
