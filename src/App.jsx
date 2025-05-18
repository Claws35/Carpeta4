import "./App.css";
import formaCompleta from "./img/preuba2.png";
import { WorkExperienceSection } from "./components/WorkExperience/WorkExperienceSection";
import { ProjectsSection } from "./components/Projects/ProjectsSection";
import imagenPofolio from "./img/yoImgportfolio.jpg";
import { fixedShapes, randomShapes } from "./data/movingShapes";
import { RiInstagramFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";

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
            <h1 className="font-[new-order] text-[150px] font-bold leading-none text-[#1d1d1d]">
              Portfolio
            </h1>
            <h2 className="font-[new-order] text-[72px] font-semibold leading-none text-[#1d1d1d]">
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

      {/* contacto */}

      <div className="hidden ">
        <div className="flex flex-col items-center pt-10 mb-20 bg-[#316998] ">
          <h2 className="font-[new-order] text-[72px] font-bold text-[#f6f2e6]">
            Contacto
          </h2>
          {/* Links circulares */}
          <div className="flex gap-8 mb-2">
            <a
              href="mailto:mateo@email.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f2e6] text-[#f08032] text-2xl hover:scale-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <RiMailFill />
            </a>
            <a
              href="https://www.linkedin.com/in/mateocutinella"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f2e6] text-[#f08032] text-2xl hover:scale-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              href="https://github.com/mateocutinella"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f6f2e6] text-[#f08032] text-2xl hover:scale-110 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <RiInstagramFill />
            </a>
          </div>
          {/* Formulario de contacto */}
          <form className="flex flex-col gap-6 w-[500px] max-w-md  p-8 rounded-2xl items-center ">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-[#f6f2e6] px-4 py-2 focus:outline-none w-[400px] focus:border-[#e63946]"
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className=" bg-[#f6f2e6]  px-4 py-2 focus:outline-none w-[400px] focus:border-[#e63946]"
              required
            />
            <textarea
              placeholder="Mensaje"
              className="bg-[#f6f2e6]  px-4 py-2 h-32 resize-none w-[400px] focus:outline-none focus:border-[#e63946]"
              required
            />
            <button
              type="submit"
              className="bg-[#f1ae3f] text-white font-bold py-2  hover:bg-[#f08032] transition w-[200px]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-20 mb-20  py-4">
        <h2 className="font-[new-order] text-[72px] font-semibold leading-none mr-5 inline-block">
          Trabajemos
        </h2>
        <h2 className="font-[new-order] text-[72px] font-bold leading-none mb-10 ml-20 inline-block">
          juntos
        </h2>
        <h3 className="font-[new-order] text-[24px] mt-5 mb-10">
          Mandame un mensaje en mis redes sociales
        </h3>
        <div className="flex gap-8 mb-2">
          {" "}
          <a
            href="https://www.linkedin.com/in/mateocutinella"
            className="w-12 h-12 flex items-center justify-center rounded-full  text-[#1d1d1d] text-[60px] hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <RiLinkedinBoxFill />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/mateocutinella"
            className="w-12 h-12 flex items-center justify-center rounded-full  text-[#1d1d1d] text-[60px] hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <RiLinkedinBoxFill />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/mateocutinella"
            className="w-12 h-12 flex items-center justify-center rounded-full  text-[#1d1d1d] text-[60px] hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <RiLinkedinBoxFill />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/mateocutinella"
            className="w-12 h-12 flex items-center justify-center rounded-full  text-[#1d1d1d] text-[60px] hover:scale-110 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <RiLinkedinBoxFill />
          </a>
        </div>
      </div>
      <footer className="w-full py-6 bg-[#f1dfbd] text-center text-[#1d1d1d] font-[new-order] text-lg  border-[#e6cfa5]">
        © {new Date().getFullYear()} Mateo Cutinella.
      </footer>
    </div>
  );
}

export default App;
