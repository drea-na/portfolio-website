"use client";

import { useState, useEffect, useRef } from "react";

export default function AboutWindow() {
  return (
    <div className="flex flex-col w-full h-full gap-6 p-4 pb-5 overflow-y-auto">

      {/* intro */}
      <SectionWrapper>
        <div className="flex gap-4 items-center">
          {/* picture container */}
         <div
          className="w-[600px] h-[150px] rounded-md border-2 border-gray-200 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/andrea.jpg')" }}
        ></div>



          {/* text container */}
          <div className="flex flex-col">
            <p className="text-sm text-gray-600 font-raleway">hallo i'm</p>

            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-pixelify)" }}
            >
              Andrea Loria (drea-na)
            </h1>

            <p
              className="text-sm mt-1 leading-relaxed"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Just a girl trying to contribute to the world one line of code at a time.
              I bring together creativity and technical skill to create work that’s accessible, 
              inclusive, and grounded in a strong sense of human connection.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* divider */}
      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>

      {/* education container */}
      <LabeledSection title="Education">
        <SquareAndText
          squareSize={50}
          title="De La Salle University"
          subtitle="BS Computer Science Major in Software Technology"
        />
      </LabeledSection>

      {/* divider */}
      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>

      {/* organizations container */}
      <LabeledSection title="Organizations">
        <SquareAndText
          squareSize={50}
          title="DLSU Bioinformatics"
          subtitle="Research member"
        />
        
        <SquareAndText
          squareSize={50}
          title="Student Discipline Formation Office (SDFO)"
          subtitle="VP for Communications, AVP for Creatives, Creatives Officer"
        />

        <SquareAndText
          squareSize={50}
          title="Computer Studies Government (CSG)"
          subtitle="Finance Director, Finance Executive, Internal Relations Executive"
        />
      </LabeledSection>

      {/* divider */}
      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>

      {/* work experience */}
      <LabeledSection title="Work Experience">
        <SquareAndText
          squareSize={50}
          title="Freelance"
          subtitle="Marketing / SEO Assistant"
        />
      </LabeledSection>

      {/* divider  */}
      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>

      {/* interests */}
      <InterestsSection />

    </div>
  );
}

/* components */

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

function LabeledSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3
        className="text-lg"
        style={{ fontFamily: "var(--font-pixelify)" }}
      >
        {title}
      </h3>

      {children}
    </div>
  );
}

function SquareAndText({
  squareSize,
  title,
  subtitle,
}: {
  squareSize: number;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="bg-gray-200 rounded-md"
        style={{ width: squareSize, height: squareSize }}
      ></div>

      <div>
        <h4 style={{ fontFamily: "var(--font-pixelify)" }} className="text-md">
          {title}
        </h4>
        <p style={{ fontFamily: "var(--font-raleway)" }} className="text-sm text-gray-700">
          {subtitle}
        </p>
      </div>
    </div>
  );
}



function InterestsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const interests = [
    "UI/UX",
    "Design",
    "Programming",
    "Baking",
    "Art",
    "Gaming",
    "Music",
    "Comics",
    "Cute things yes",
  ];

  const [items, setItems] = useState(
    interests.map((t, i) => ({
      id: i,
      label: t,
      x: 20 + (i % 4) * 60,
      y: 20 + Math.floor(i / 4) * 60,
    }))
  );

  const [dragging, setDragging] = useState<number | null>(null);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    if (dragging === null) return;
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();

    setItems((prev) =>
      prev.map((item) =>
        item.id === dragging
          ? {
              ...item,
              x: Math.min(
                Math.max(e.clientX - bounds.left - offset.current.x, 0),
                bounds.width - 50
              ),
              y: Math.min(
                Math.max(e.clientY - bounds.top - offset.current.y, 0),
                bounds.height - 50
              ),
            }
          : item
      )
    );
  };

  const stopDrag = () => setDragging(null);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  });

  return (
    <div className="flex flex-col gap-3 mb-4">
      <h3
        className="text-lg"
        style={{ fontFamily: "var(--font-pixelify)" }}
      >
        Interests
      </h3>

      <div
        ref={containerRef}
        className="relative w-full h-48 rounded-md bg-gray-100 overflow-hidden border border-gray-300"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute w-12 h-12 bg-[#E2E2E2] rounded-md flex items-center justify-center text-xs select-none cursor-pointer"
            style={{ left: item.x, top: item.y }}
            onMouseDown={(e) => {
              setDragging(item.id);
              offset.current = {
                x: e.nativeEvent.offsetX,
                y: e.nativeEvent.offsetY,
              };
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}