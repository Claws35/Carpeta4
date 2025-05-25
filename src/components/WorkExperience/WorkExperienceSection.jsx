import { WorkExperienceItem } from "./WorkExperienceItem";
import { workExperiences } from "./data";
import AOS from "aos";

export function WorkExperienceSection() {
  return (
    <div className="flex flex-col items-center justify-between py-20 max-w-[800px] mx-auto">
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        className="font-[new-order] text-[48px] md:text-[62px] lg:text-[72px] font-semibold leading-none mb-10 text-center"
        style={{ color: "rgba(var(--color-text-rgb), 1)" }}
      >
        Experiencia laboral
      </h2>
      <h3
        data-aos="fade-up"
        data-aos-delay="200"
        className="font-[new-order] text-[18px] md:text-[22px] lg:text-[26px] font-regular leading-none mb-20 text-center"
        style={{ color: "rgba(var(--color-text-rgb), 0.9)" }}
      >
        No todo en la vida es el objetivo, sino el camino
      </h3>
      <div className="w-full" data-aos="fade-up" data-aos-delay="300">
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
