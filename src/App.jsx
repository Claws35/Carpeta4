import "./App.css";
import formaCompleta from "./img/preuba2.png";
import { WorkExperienceSection } from "./components/WorkExperience/WorkExperienceSection";
import { ProjectsSection } from "./components/Projects/ProjectsSection";

function App() {
  return (
    <div className="bg-[#f1dfbd]">
      <div className="flex flex-col items-center justify-between h-screen">
        <div className="mt-[150px] flex flex-col items-center gap-2 mb-30">
          <h1 className="font-[new-order] text-[150px] font-bold leading-none">
            Portfolio
          </h1>
          <h2 className="font-[new-order] text-[72px] font-semibold leading-none">
            Mateo Cutinella
          </h2>
        </div>
        <img src={formaCompleta} alt="" className="" />
      </div>

      <div className="flex flex-col items-center justify-between h-[500px] mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-100 ml-10">
            <h3 className="font-[new-order] text-[72px] font-semibold text-[#e63946]">
              Emocional
            </h3>
            <h3 className="font-[new-order] text-[72px] font-semibold text-[#f08032]">
              Minimalista
            </h3>
          </div>
          <div className="flex justify-centre gap-60 mr-20 mt-10">
            <h3 className="font-[new-order] text-[72px] font-semibold text-[#f08032]">
              Impactante
            </h3>
            <h3 className="font-[new-order] text-[72px] font-semibold text-[#e63946]">
              Sensible
            </h3>
          </div>
        </div>
      </div>

      <WorkExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
