"use client";

import LogoLoop, { LogoItem } from '../components/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDocker,
  SiFigma,
  SiGit,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGoland,
} from 'react-icons/si';
import { FaAndroid } from 'react-icons/fa';

export default function TechstackWindow() {
  const techLogos: LogoItem[] = [
    { node: <SiReact size={32} />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs size={32} />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript size={32} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss size={32} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiPython size={32} />, title: "Python", href: "https://www.python.org" },
    { node: <SiGoland size={32} />, title: "Golang", href: "https://golang.org" },
    { node: <SiMysql size={32} />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiMongodb size={32} />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiFirebase size={32} />, title: "Firebase", href: "https://firebase.google.com" },
    { node: <FaAndroid size={32} />, title: "Android Studio", href: "https://developer.android.com/studio" },
    { node: <SiDocker size={32} />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiGit size={32} />, title: "Git", href: "https://git-scm.com" },
    { node: <SiFigma size={32} />, title: "Figma", href: "https://www.figma.com" },
  ];

  const webDevSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "HTML",
    "CSS",
    "Handlebars",
    "Javascript",
  ];

  const aiDataSkills = ["Python", "PyTorch", "Pandas", "Numpy"];

  const toolsSkills = [
    "Git",
    "Figma",
    "VS Code",
    "Jira",
    "Tableau",
    "Docker",
    "Android Studio", 
    "Visual Studio",
    "Photoshop",
    "Clickup",
  ];

  const otherSkills = ["C", "C++", "Java", "Golang", "Assembly", "MySQL", "MongoDB", "Firebase",];

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
      <SkillContainer title="Other Technologies" skills={otherSkills} />
    </div>
  );
}
