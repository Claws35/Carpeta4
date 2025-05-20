import React from "react";
import imagenPofolio from "../img/yoImgportfolio.jpg";

const SobreMi = () => {
  return (
    <div
      className="flex flex-col items-center md:items-start max-w-[800px] gap-6 mx-auto mt-10 relative z-20"
      style={{ color: "rgba(var(--color-text-rgb), 1)" }}
    >
      <h2 className="font-[new-order] text-[52px] font-bold leading-none mb-5">
        Sobre mí
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="max-w-[500px] md:max-w-[400px]">
          <p>
            Me llamo Mateo Cutinella, estudiante avanzado en la licenciatura en
            diseño Multimedia y desde siempre he tenido una pasión por el diseño
            y la creatividad. Mi viaje comenzó de pequeño, cuando pasaba horas
            experimentando con programas de dibujo digital y explorando cómo
            combinar colores e ideas para dar vida a historias visuales. <br />{" "}
            <br />
            Aunque en ese entonces era solo un hobby, pronto me di cuenta de que
            quería dedicarme a algo que me permitiera unir mi creatividad con la
            tecnología. Cuando no estoy diseñando, me gusta investigar sobre
            nuevas tecnologías, descubriendo cómo las herramientas digitales
            pueden llevar mi trabajo al siguiente nivel.
          </p>
        </div>
        <div className="w-[300px] h-[300px] overflow-hidden ml-0 md:ml-10">
          <img
            className="w-full h-full rounded-full object-cover"
            src={imagenPofolio}
            alt="Portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
