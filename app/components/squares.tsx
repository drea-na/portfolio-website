"use client";

import { useState, useEffect } from "react";

// import your window components
import AboutWindow from "../windows/about";
import ProjectsWindow from "../windows/projects";
import ContactWindow from "../windows/contact";
import TechstackWindow from "../windows/techstack";
import MusicWindow from "../windows/music_player";

interface WindowData {
  id: number;
  pos: { x: number; y: number };
  size: { w: number; h: number }; // added size
}

export default function ClickableSquares() {
  const squares = [1, 2, 3, 4, 5];
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // start dragging
  const startDrag = (
    id: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setDraggingId(id);
    const win = windows.find((w) => w.id === id);
    if (win) {
      setOffset({
        x: e.clientX - win.pos.x,
        y: e.clientY - win.pos.y,
      });
    }
  };

  // continue dragging
  const onDrag = (e: MouseEvent) => {
    if (draggingId === null) return;
    setWindows((prev) =>
      prev.map((w) =>
        w.id === draggingId
          ? { ...w, pos: { x: e.clientX - offset.x, y: e.clientY - offset.y } }
          : w
      )
    );
  };

  // stop dragging
  const stopDrag = () => setDraggingId(null);

  useEffect(() => {
    if (draggingId !== null) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", stopDrag);
    } else {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [draggingId, offset]);

  // open window with custom size
  const openWindow = (id: number) => {
    if (!windows.some((w) => w.id === id)) {
      const size =
        id === 5 // Music Player
          ? { w: 300, h: 350 }
          : { w: 700, h: 500 }; // other windows
      setWindows((prev) => [
        ...prev,
        { id, pos: { x: 200 + id * 20, y: 100 + id * 20 }, size },
      ]);
    }
  };

  // close window
  const closeWindow = (id: number) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  // window names
  const WINDOW_TITLES = [
    "About Me",
    "Projects",
    "Contact",
    "Tech Stack",
    "Music Player",
  ];

  // window content
  const getWindowContent = (id: number) => {
    switch (id) {
      case 1:
        return <AboutWindow />;
      case 2:
        return <ProjectsWindow />;
      case 3:
        return <ContactWindow />;
      case 4:
        return <TechstackWindow />;
      case 5:
        return <MusicWindow />;
      default:
        return <div>Empty Window</div>;
    }
  };

  return (
    <>
      {/* left squares */}
      <div className="absolute left-8 top-[45%] transform -translate-y-1/2 flex flex-col gap-14">
        {squares.map((square) => (
          <button
            key={square}
            className="w-[60px] h-[60px] rounded-[10px] bg-[#F4F4F4] border-2 border-[#e2e2e2] shadow-sm 
                       hover:shadow-md hover:scale-110 transition-shadow duration-300 ease-out"
            onClick={() => openWindow(square)}
          ></button>
        ))}
      </div>

      {/* windows */}
      {windows.map((win) => (
        <div
          key={win.id}
          className="absolute bg-white rounded-lg shadow-xl z-50 flex flex-col"
          style={{ left: win.pos.x, top: win.pos.y, width: win.size.w, height: win.size.h }}
        >
          {/* window header */}
          <div
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-t-lg cursor-move select-none border-b border-gray-300"
            onMouseDown={(e) => startDrag(win.id, e)}
          >
            {/* title */}
            <span
              className="font-semibold"
              style={{ fontFamily: "var(--font-pixelify)" }}
            >
              {WINDOW_TITLES[win.id - 1]}
            </span>

            <button
              className="text-gray-500 hover:text-gray-800 font-bold"
              onClick={() => closeWindow(win.id)}
            >
              ✕
            </button>
          </div>

          {/* window content */}
          <div
            className="p-4 flex-1 overflow-auto"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            {getWindowContent(win.id)}
          </div>
        </div>
      ))}
    </>
  );
}
