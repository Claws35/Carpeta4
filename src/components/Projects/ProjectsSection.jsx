import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "./data";

export function ProjectsSection() {
  return (
    <div
      className="flex flex-col items-center justify-between py-10 md:py-20"
      style={{ backgroundColor: "rgba(var(--color-background-rgb), 1)" }}
    >
      <div className="max-w-[800px] mx-auto w-full">
        <h2
          className="font-[new-order] text-[48px] md:text-[62px] lg:text-[72px] font-semibold leading-none mb-10 text-center"
          style={{ color: "rgba(var(--color-text-rgb), 1)" }}
        >
          Proyectos
        </h2>
        <h3
          className="font-[new-order] text-[18px] md:text-[22px] lg:text-[26px] font-regular leading-none mb-10 md:mb-20 text-center"
          style={{ color: "rgba(var(--color-text-rgb), 0.9)" }}
        >
          Creaciones que representan mi pasión y dedicación
        </h3>
        <div className="flex flex-col gap-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
