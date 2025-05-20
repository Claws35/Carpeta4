import { RiInstagramFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";

export function ContactSection() {
  return (
    <div className="relative flex flex-col items-center max-w-[900px] m-auto justify-center mt-30 mb-20 py-4 px-4">
      {/* Forma 1 - Rectángulo rojo */}
      <div className="md:absolute w-[160px] h-[30px] bg-[#d64320] md:left-0 md:top-1/2 md:-translate-y-1/2 mb-10 md:mb-0" />

      {/* Contenido principal */}
      <h2
        className="font-[new-order] text-5xl sm:text-[72px] font-semibold leading-none mr-5 inline-block"
        style={{ color: "rgba(var(--color-text-rgb), 1)" }}
      >
        Trabajemos
      </h2>
      <h2
        className="font-[new-order] text-5xl sm:text-[72px] font-bold leading-none mb-10 ml-20 inline-block"
        style={{ color: "rgba(var(--color-text-rgb), 1)" }}
      >
        juntos
      </h2>

      <h3
        className="font-[new-order] text-[20px] mt-0 mb-10 text-center z-10"
        style={{ color: "rgba(var(--color-text-rgb), 1)" }}
      >
        Mandame un mensaje en mis redes sociales
      </h3>

      <div className="flex gap-8 mb-10 z-20">
        <a
          href="https://www.linkedin.com/in/mateocutinella"
          className="w-12 h-12 flex items-center justify-center rounded-full  text-[60px] hover:scale-110 transition"
          style={{ color: "rgba(var(--color-text-rgb), 1)" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <RiLinkedinBoxFill />
        </a>
        <a
          href="https://www.instagram.com"
          className="w-12 h-12 flex items-center justify-center rounded-full  text-[60px] hover:scale-110 transition"
          style={{ color: "rgba(var(--color-text-rgb), 1)" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <RiInstagramFill />
        </a>
        <a
          href="mailto:mateo@example.com"
          className="w-12 h-12 flex items-center justify-center rounded-full  text-[60px] hover:scale-110 transition"
          style={{ color: "rgba(var(--color-text-rgb), 1)" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <RiMailFill />
        </a>
      </div>

      {/* FORMAS SOLAPADAS - MOBILE */}

      {/* FORMAS SOLAPADAS - DESKTOP */}
      <div className="hidden md:block">
        {/* Cuadrado amarillo */}
        <div className="absolute right-0 top-44 w-[120px] h-[120px] bg-[#f89c1f] opacity-90 z-0" />
        {/* Triángulo azul */}
        <div className="absolute right-10 top-20 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[140px] border-b-[#316998] z-10" />
      </div>
    </div>
  );
}
