import "./App.css";
import formaCompleta from "./img/preuba2.png";
import { WorkExperienceSection } from "./components/WorkExperience/WorkExperienceSection";
import { ProjectsSection } from "./components/Projects/ProjectsSection";
import imagenPofolio from "./img/yoImgportfolio.jpg";
import { fixedShapes, randomShapes } from "./data/movingShapes";

function App() {
  return (
    <div className="bg-[#f1dfbd] relative overflow-hidden">
      {/* Hero Section con formas animadas */}
      <div className="relative overflow-hidden">
        {/* Formas decorativas con animación horizontal */}
        {[...fixedShapes, ...randomShapes].map((shape) => (
          <div
            key={shape.id}
            className="absolute pointer-events-none select-none"
            style={{
              top: shape.top,
              left: "-200px",
              width: shape.size,
              animation: `moveHorizontal ${shape.speed} linear ${shape.delay} infinite`,
              zIndex: shape.zIndex || 1,
            }}
          >
            <img src={shape.image} alt="" className="w-full h-auto" />
          </div>
        ))}

        {/* Contenido del hero */}
        <div className="flex flex-col items-center justify-between h-full relative z-10">
          <div className="mt-[150px] flex flex-col items-center gap-2 mb-30">
            <h1 className="font-[new-order] text-[150px] font-bold leading-none">
              Portfolio
            </h1>
            <h2 className="font-[new-order] text-[72px] font-semibold leading-none">
              Mateo Cutinella
            </h2>
          </div>

          <img src={formaCompleta} alt="" className="relative z-10" />

          {/* Texto centrado encima de la imagen */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center mb-10">
            <div className="flex gap-60">
              <h3 className="font-[new-order] text-[48px] font-semibold text-[#e63946]">
                Emocional
              </h3>
              <h3 className="font-[new-order] text-[48px] font-semibold text-[#f08032]">
                Minimalista
              </h3>
            </div>
            <div className="flex gap-40 mt-4 mr-20">
              <h3 className="font-[new-order] text-[48px] font-semibold text-[#f08032]">
                Impactante
              </h3>
              <h3 className="font-[new-order] text-[48px] font-semibold text-[#e63946]">
                Sensible
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Experiencia y proyectos */}
      <WorkExperienceSection />
      <ProjectsSection />

      {/* Sobre mí */}
      <div className="flex flex-col items-start max-w-[800px] gap-6 mx-auto h-[500px] mt-10 relative z-20">
        <h2 className="font-[new-order] text-[52px] font-bold leading-none mb-5">
          Sobre mí
        </h2>
        <div className="flex">
          <div className="max-w-[400px]">
            <p>
              Me llamo Mateo Cutinella, estudiante avanzado en la licenciatura
              en diseño Multimedia y desde siempre he tenido una pasión por el
              diseño y la creatividad. Mi viaje comenzó de pequeño, cuando
              pasaba horas experimentando con programas de dibujo digital y
              explorando cómo combinar colores e ideas para dar vida a historias
              visuales. <br /> <br /> Aunque en ese entonces era solo un hobby,
              pronto me di cuenta de que quería dedicarme a algo que me
              permitiera unir mi creatividad con la tecnología. Cuando no estoy
              diseñando, me gusta investigar sobre nuevas tecnologías,
              descubriendo cómo las herramientas digitales pueden llevar mi
              trabajo al siguiente nivel.
            </p>
          </div>
          <div className="w-[300px] h-[300px] overflow-hidden ml-10">
            <img
              className="w-full h-full rounded-full object-cover"
              src={imagenPofolio}
              alt="Portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
