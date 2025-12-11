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
        title="Project One"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aliquam sit amet sapien vel nisi malesuada placerat."
        tags={["React", "UI/UX", "Frontend"]}
      />

      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>

      {/* project 2 */}
      <ProjectItem
        title="Project Two"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus urna. Suspendisse potenti. Integer feugiat fermentum elit."
        tags={["Next.js", "Design", "API"]}
      />

      <div className="w-full h-0.5 bg-[#E2E2E2] my-1 shrink-0"></div>
      {/* project 3 */}
      <ProjectItem
        title="Project Three"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec diam eu eros accumsan tempor id et odio."
        tags={["TypeScript", "System", "Backend"]}
      />

    </div>
  );
}

/* project items */

function ProjectItem({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="flex gap-4 items-start">

      {/* left container */}
      <div className="w-[300px] h-[180px] bg-gray-200 rounded-md shrink-0"></div>

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
