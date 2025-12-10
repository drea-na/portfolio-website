"use client";

import { useState, useEffect } from "react";

interface WindowData {
  id: number;
  pos: { x: number; y: number };
}

export default function ClickableSquares() {
  const squares = [1, 2, 3, 4, 5];
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startDrag = (id: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDraggingId(id);
    const win = windows.find((w) => w.id === id);
    if (win) {
      setOffset({ x: e.clientX - win.pos.x, y: e.clientY - win.pos.y });
    }
  };

  const onDrag = (e: MouseEvent) => {
    if (draggingId === null) return;
    setWindows((prev) =>
      prev.map((w) =>
        w.id === draggingId ? { ...w, pos: { x: e.clientX - offset.x, y: e.clientY - offset.y } } : w
      )
    );
  };

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

  const openWindow = (id: number) => {
    if (!windows.some((w) => w.id === id)) {
      setWindows((prev) => [...prev, { id, pos: { x: 200 + id * 20, y: 100 + id * 20 } }]);
    }
  };

  const closeWindow = (id: number) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <>
      {/* squares */}
      <div className="absolute left-8 top-[45%] transform -translate-y-1/2 flex flex-col gap-14">
        {squares.map((square) => (
            <button
            key={square}
            className="w-[60px] h-[60px] rounded-[10px] bg-[#F4F4F4] border-2 border-[#e2e2e2] shadow-sm 
                        hover:shadow-md hover:scale-110 transition-transform transition-shadow duration-300 ease-out"
            onClick={() => openWindow(square)}
            ></button>
        ))}
        </div>

      {/* window */}
      {windows.map((win) => (
        <div
          key={win.id}
          className="absolute w-[400px] h-[300px] bg-white rounded-lg shadow-xl z-50 flex flex-col"
          style={{ left: win.pos.x, top: win.pos.y }}
        >
          {/* window header */}
          <div
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-t-lg cursor-move select-none border-b border-gray-300"
            onMouseDown={(e) => startDrag(win.id, e)}
          >
            <span className="font-semibold">Window {win.id}</span>
            <button
              className="text-gray-500 hover:text-gray-800 font-bold"
              onClick={() => closeWindow(win.id)}
            >
              ✕
            </button>
          </div>

          {/* window content */}
          <div className="p-4 flex-1 overflow-auto">
            <p>Window {win.id}.</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices turpis quis lacinia laoreet. 
                Morbi sollicitudin risus sit amet erat faucibus, ut varius massa iaculis. Nulla vitae ante lectus. 
                Ut venenatis turpis vitae sagittis commodo. Vivamus facilisis mi tortor, id viverra augue vehicula et. 
                Maecenas a risus mattis, facilisis turpis id, venenatis turpis. </p>
          </div>
        </div>
      ))}
    </>
  );
}
