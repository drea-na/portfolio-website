"use client";

export default function ContactWindow() {
  return (
    <div className="flex flex-col w-full h-full gap-6 p-4 pb-5 overflow-y-auto">

      {/* title */}
      <h1
        className="text-4xl font-bold text-center"
        style={{ fontFamily: "var(--font-pixelify)" }}
      >
        Let's Chat
      </h1>

      {/* email tag */}
      <div className="flex justify-center">
        <span
          className="px-3 py-1 rounded-md bg-[#E2E2E2] text-sm"
          style={{ fontFamily: "var(--font-pixelify)" }}
        >
          email@email.com
        </span>
      </div>

      {/* envelope container */}
      <div className="flex justify-center mt-6">
        <div className="w-[300px] h-[200px] bg-gray-200 rounded-md flex items-center justify-center">
          {/* TODO  - put envelope here */}
          <img src="/envelope.png" alt="Envelope" className="w-24 h-24 object-contain" />
        </div>
      </div>

    </div>
  );
}
