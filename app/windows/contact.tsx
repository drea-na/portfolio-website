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
          andreae.loria@gmail.com
        </span>
      </div>

      {/* envelope container */}
      <div className="flex justify-center mt-6">
        <a
          href="mailto:andreae.loria@gmail.com"
          className="w-[300px] h-[200px] flex items-center justify-center"
        >
          <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img src="/envelope.png" alt="Envelope" className="w-24 h-24 object-contain" />
          </div>
        </a>
      </div>

    </div>
  );
}
