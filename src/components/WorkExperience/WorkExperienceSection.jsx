import { WorkExperienceItem } from "./WorkExperienceItem";
import { workExperiences } from "./data";

export function WorkExperienceSection() {
  return (
    <div className="flex flex-col items-center justify-between py-20 max-w-[800px] mx-auto">
      <h2 className="font-[new-order] text-[72px] font-semibold leading-none mb-10 text-[#1d1d1d]">
        Experiencia laboral
      </h2>
      <h3 className="font-[new-order] text-[26px] font-regular leading-none mb-20">
        No todo en la vida es el objetivo, sino el camino
      </h3>
      <div className="w-full">
        {workExperiences.map((exp, index) => (
          <WorkExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            description={exp.description}
            link={exp.link}
            date={exp.date}
          />
        ))}
      </div>
    </div>
  );
}
