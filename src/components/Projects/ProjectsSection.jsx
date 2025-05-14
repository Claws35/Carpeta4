import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "./data";

export function ProjectsSection() {
  return (
    <div className="flex flex-col items-center justify-between py-20 bg-[#f1dfbd]">
      <div className="max-w-[800px] mx-auto w-full">
        <h2 className="font-[new-order] text-[72px] font-semibold leading-none mb-10 text-center">
          Proyectos
        </h2>
        <h3 className="font-[new-order] text-[26px] font-regular leading-none mb-20 text-center">
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
