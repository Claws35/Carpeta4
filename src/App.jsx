import "./App.css";
import formaCompleta from "./img/preuba2.png";
import { WorkExperienceSection } from "./components/WorkExperience/WorkExperienceSection";
import { ProjectsSection } from "./components/Projects/ProjectsSection";
import imagenPofolio from "./img/yoImgportfolio.jpg";

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
      <div className="flex flex-col items-start max-w-[800px] gap-6 mx-auto h-[500px] mt-10">
        <h2 className="font-[new-order] text-[52px] font-bold leading-none  mb-5">
          Sobre mí
        </h2>
        <div className="flex   ">
          <div className="max-w-[500px]">
            <p>
              Me llamo Mateo Cutinella, estudiante avanzado en la licenciatura
              en diseño Multimedia y desde siempre he tenido una pasión por el
              diseño y la creatividad. Mi viaje comenzó de pequeño, cuando
              pasaba horas experimentando con programas de dibujo digital y
              explorando cómo combinar colores e ideas para dar vida a historias
              visuales. <br /> <br /> Aunque en ese entonces era solo un hobby,
              pronto me di cuenta de que quería dedicarme a algo que me
              permitiera unir mi creatividad con la tecnología Cuando no estoy
              diseñando, me gusta investigar sobre nuevas tecnologías,
              descubriendo cómo las herramientas digitales pueden llevar mi
              trabajo al siguiente nivel.
            </p>
          </div>
          <div className="w-[300px] h-[300px] overflow-hidden">
            <img
              className="w-full h-full rounded-full object-cover"
              src={imagenPofolio}
              alt="Portfolio"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
