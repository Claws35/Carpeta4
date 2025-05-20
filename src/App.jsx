import "./App.css";
import formaCompletaLight from "./img/imagenHeroOscura.png";
import formaCompletaDark from "./img/ImagenHeroClara.png";
import { WorkExperienceSection } from "./components/WorkExperience/WorkExperienceSection";
import { ProjectsSection } from "./components/Projects/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import imagenPofolio from "./img/yoImgportfolio.jpg";
import SobreMi from "./components/SobreMi";
import { fixedShapes } from "./data/movingShapes";
import { RiInstagramFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

function App() {
  const [isDark, setIsDark] = useState(false);
  const mainDivRef = useRef(null);
  const toggleDarkMode = () => {
    if (mainDivRef.current) {
      mainDivRef.current.classList.toggle("dark");
      mainDivRef.current.classList.toggle("light");
      setIsDark(mainDivRef.current.classList.contains("dark"));
    }
  };

  useEffect(() => {
    if (mainDivRef.current) {
      setIsDark(mainDivRef.current.classList.contains("dark"));
    }
  }, []);

  return (
    <div className="light" ref={mainDivRef}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 text-4xl transition"
        style={{ color: "rgba(var(--color-text-rgb), 1)" }}
        aria-label="Cambiar modo oscuro/claro"
      >
        {isDark ? <RiSunFill /> : <RiMoonFill />}
      </button>
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "rgba(var(--color-background-rgb), 1)" }}
      >
        {/* Hero Section con formas animadas */}
        <div className="relative overflow-hidden">
          {/* Formas decorativas */}
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
              {shape.component ? (
                shape.component({ className: "w-full h-auto shape-img" })
              ) : (
                <img
                  src={shape.image}
                  alt=""
                  className="w-full h-auto shape-img"
                />
              )}
            </div>
          ))}
          <div className="flex flex-col items-center justify-between h-full relative z-10">
            <div className="mt-[150px] flex flex-col items-center gap-2 mb-50 sm:mb-40 md:mb-30">
              <h1
                className="font-[new-order] text-[80px] sm:text-[90px] md:text-[120px] lg:text-[150px] font-bold leading-none"
                style={{ color: "rgba(var(--color-text-rgb), 1)" }}
              >
                Portfolio
              </h1>
              <h2
                className="font-[new-order] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-semibold leading-none"
                style={{ color: "rgba(var(--color-text-rgb), 1)" }}
              >
                Mateo Cutinella
              </h2>
            </div>
            <img
              src={isDark ? formaCompletaDark : formaCompletaLight}
              alt=""
              className="relative z-10 w-[422px]"
            />
            {/* Texto centrado encima de la imagen */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center mb-10">
              <div className="flex gap-60">
                <h3
                  className="font-[new-order] text-[48px] font-semibold"
                  style={{ color: "rgba(var(--color-secondary-rgb), 1)" }}
                >
                  Emocional
                </h3>
                <h3
                  className="font-[new-order] text-[48px] font-semibold"
                  style={{ color: "rgba(var(--color-primary-rgb), 1)" }}
                >
                  Minimalista
                </h3>
              </div>
              <div className="flex gap-40 mt-4 mr-20">
                <h3
                  className="font-[new-order] text-[48px] font-semibold"
                  style={{ color: "rgba(var(--color-primary-rgb), 1)" }}
                >
                  Impactante
                </h3>
                <h3
                  className="font-[new-order] text-[48px] font-semibold"
                  style={{ color: "rgba(var(--color-secondary-rgb), 1)" }}
                >
                  Sensible
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Versión mobile de las palabras */}
        <div className="flex flex-col items-center mt-10 md:hidden mb-4 text-center">
          <div className="flex sm:flex-row flex-col gap-3 sm:gap-8">
            <h3
              className="font-[new-order] text-[36px] xs:text-[42px] sm:text-5xl font-semibold"
              style={{ color: "rgba(var(--color-secondary-rgb), 1)" }}
            >
              Emocional
            </h3>
            <h3
              className="font-[new-order] text-[36px] xs:text-[42px] sm:text-5xl font-semibold"
              style={{ color: "rgba(var(--color-primary-rgb), 1)" }}
            >
              Minimalista
            </h3>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 sm:gap-8">
            <h3
              className="font-[new-order] text-[36px] xs:text-[42px] sm:text-5xl font-semibold"
              style={{ color: "rgba(var(--color-primary-rgb), 1)" }}
            >
              Impactante
            </h3>
            <h3
              className="font-[new-order] text-[36px] xs:text-[42px] sm:text-5xl font-semibold"
              style={{ color: "rgba(var(--color-secondary-rgb), 1)" }}
            >
              Sensible
            </h3>
          </div>
        </div>

        {/* Experiencia y proyectoss */}
        <div className="px-4 md:px-4 lg:px-0">
          <WorkExperienceSection />
          <ProjectsSection />
          <SobreMi />
        </div>

        {/* contacto */}
        <ContactSection />

        <footer
          className="w-full py-6 text-center font-[new-order] text-lg border-[#e6cfa5]"
          style={{
            backgroundColor: "rgba(var(--color-background-rgb), 1)",
            color: "rgba(var(--color-text-rgb), 1)",
          }}
        >
          © {new Date().getFullYear()} Mateo Cutinella.
        </footer>
      </div>
    </div>
  );
}

export default App;
