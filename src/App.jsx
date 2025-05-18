import "./App.css";
import formaCompleta from "./img/preuba2.png";
import { WorkExperienceSection } from "./components/WorkExperience/WorkExperienceSection";
import { ProjectsSection } from "./components/Projects/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import imagenPofolio from "./img/yoImgportfolio.jpg";
import { fixedShapes } from "./data/movingShapes";
import { RiInstagramFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";

function App() {
  return (
    <div className="bg-[#f1dfbd] relative overflow-hidden">
      {/* Hero Section con formas animadas */}
      <div className="relative overflow-hidden">
        {/* Formas decorativas con animación horizontal o vertical según el dispositivo */}
        {[...fixedShapes].map((shape) => (
          <div
            key={shape.id}
            className="absolute pointer-events-none select-none"
            style={{
              top: shape.top,
              left: "-200px",
              width: shape.size,
              animation: `${
                window.innerWidth < 768
                  ? `moveHorizontalMobile ${shape.speed} linear ${shape.delay} infinite`
                  : `moveHorizontal ${shape.speed} linear ${shape.delay} infinite`
              }`,
              zIndex: shape.zIndex || 1,
            }}
          >
            <img src={shape.image} alt="" className="w-full h-auto shape-img" />
          </div>
        ))}
        <div className="flex flex-col items-center justify-between h-full relative z-10">
          <div className="mt-[150px] flex flex-col items-center gap-2 mb-40 md:mb-30">
            <h1 className="font-[new-order] text-[80px] sm:text-[90px] md:text-[120px] lg:text-[150px] font-bold leading-none text-[#1d1d1d]">
              Portfolio
            </h1>
            <h2 className="font-[new-order] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-semibold leading-none text-[#1d1d1d]">
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
      <div className="px-4 md:px-4 lg:px-0">
        <WorkExperienceSection />
        <ProjectsSection />
      </div>

      {/* Sobre mí */}
      <div className="px-4 md:px-4 lg:px-0">
        <div className="flex flex-col items-center md:items-start max-w-[800px] gap-6 mx-auto  mt-10 relative z-20">
          <h2 className="font-[new-order] text-[52px] font-bold leading-none mb-5">
            Sobre mí
          </h2>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="max-w-[500px] md:max-w-[400px]">
              <p className="">
                Me llamo Mateo Cutinella, estudiante avanzado en la licenciatura
                en diseño Multimedia y desde siempre he tenido una pasión por el
                diseño y la creatividad. Mi viaje comenzó de pequeño, cuando
                pasaba horas experimentando con programas de dibujo digital y
                explorando cómo combinar colores e ideas para dar vida a
                historias visuales. <br /> <br /> Aunque en ese entonces era
                solo un hobby, pronto me di cuenta de que quería dedicarme a
                algo que me permitiera unir mi creatividad con la tecnología.
                Cuando no estoy diseñando, me gusta investigar sobre nuevas
                tecnologías, descubriendo cómo las herramientas digitales pueden
                llevar mi trabajo al siguiente nivel.
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

      {/* contacto */}

      <ContactSection />

      <footer className="w-full py-6 bg-[#f1dfbd] text-center text-[#1d1d1d] font-[new-order] text-lg  border-[#e6cfa5]">
        © {new Date().getFullYear()} Mateo Cutinella.
      </footer>
    </div>
  );
}

export default App;
