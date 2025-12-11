"use client";

export default function ProjectsWindow() {
  return (
    <div className="flex flex-col w-full h-full gap-6 p-4 pb-5 overflow-y-auto">

      {/* title */}
      <h1
        className="text-4xl font-bold text-center"
        style={{ fontFamily: "var(--font-pixelify)" }}
      >
        Projects
      </h1>

      {/* project 1 */}
      <ProjectItem
        title="Drug resistance prediction of Mtb using ML"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aliquam sit amet sapien vel nisi malesuada placerat."
        tags={["Python", "Numpy", "Pandas"]}
        link="https://github.com/1bellaa/ths-st1-tb"
      />

      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>

      {/* project 2 */}
      <ProjectItem
        title="Profs 2 Pick"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus urna. Suspendisse potenti. Integer feugiat fermentum elit."
        tags={["Handlebars", "HTML", "CSS", "Javascript", "Secure Web Development"]}
        link="https://github.com/NARSerrato/CSSECDV-main"
      />

      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>
      
      {/* project 3 */}
      <ProjectItem
        title="Plately"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec diam eu eros accumsan tempor id et odio."
        tags={["UI/UX", "Database design", "Java", "Android Studio"]}
        link="https://github.com/nathan-andrei/Plately"
      />

      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>
      
      {/* project 4 */}
      <ProjectItem
        title="Animo Portal"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec diam eu eros accumsan tempor id et odio."
        tags={["TypeScript", "Next.js", "Node.js", "Database design", "Distributed systems"]}
        link="https://github.com/jeanfran09/enrollment-system"
      />

    </div>
  );
}

/* project items */

function ProjectItem({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <div className="flex gap-4 items-start">

      {/* left container clickable */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[300px] h-[180px] shrink-0 transform transition-transform duration-300 hover:scale-105"
      >
        <div className="w-full h-full bg-gray-200 rounded-md"></div>
      </a>

      {/* right container */}
      <div className="flex flex-col">

        {/* title */}
        <h2
          className="text-2xl"
          style={{ fontFamily: "var(--font-pixelify)" }}
        >
          {title}
        </h2>

        {/* description */}
        <p
          className="text-sm mt-1 leading-relaxed text-gray-700"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          {description}
        </p>

        {/* tags */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-[#E2E2E2] text-xs"
              style={{ fontFamily: "var(--font-pixelify)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
