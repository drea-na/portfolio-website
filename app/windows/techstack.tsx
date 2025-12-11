"use client";

import LogoLoop, { LogoItem } from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function TechstackWindow() {
  const techLogos: LogoItem[] = [
    { node: <SiReact size={32} />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs size={32} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={32} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={32} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const webDevSkills = ["React", "Next.js", "TypeScript", "Tailwind"];
  const aiDataSkills = ["Python", "TensorFlow", "PyTorch", "Pandas"];
  const toolsSkills = ["Git", "Figma", "VS Code", "Jira"];

  const SkillContainer = ({ title, skills }: { title: string; skills: string[] }) => (
    <div className="flex flex-col gap-2 p-4 rounded-md bg-gray-100">
      <h2
        className="text-2xl font-bold"
        style={{ fontFamily: "var(--font-pixelify)" }}
      >
        {title}
      </h2>
      <div className="flex flex-wrap gap-2 mt-1">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 rounded-md bg-[#E2E2E2] text-sm"
            style={{ fontFamily: "var(--font-pixelify)" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-full gap-6 p-4 pb-5 overflow-y-auto">

      {/* title */}
      <h1
        className="text-4xl font-bold text-center"
        style={{ fontFamily: "var(--font-pixelify)" }}
      >
        Tech Stack
      </h1>

      {/* logo loop from reactbits */}
      <div className="w-full h-32">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology logos"
        />
      </div>

      {/* skills */}
      <SkillContainer title="Web Development" skills={webDevSkills} />
      <SkillContainer title="AI & Data" skills={aiDataSkills} />
      <SkillContainer title="Tools & Others" skills={toolsSkills} />

    </div>
  );
}
