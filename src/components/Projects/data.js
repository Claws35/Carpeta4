import imagenCarpetaAnual from "../../img/projects/hola.webp";
import imagenMotionVoces from "../../img/projects/fotoVocesAnimacion.webp";
import imagenNuncaEstoy from "../../img/projects/introImagenNuncaEstoy2.webp";
import imagenPokemon from "../../img/projects/pokemonImagen.webp";
import imagenAmelie from "../../img/projects/AmelieOceanResidentImg3.webp";
import fotocarpeta4 from "../../img/projects/fotocarpeta4.webp";
import imagenDomera from "../../img/projects/domerauy.webp";

//prueba
export const TAGS = {
  NEXT: {
    name: "After Effects",
    class: "bg-[#00015a] text-white",
    icon: null,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: null,
  },
  AFTEREFEECTS: {
    name: "React",
    class: "bg-[#69b1e2] text-white",
    icon: null,
  },
};

export const PROJECTS = [
  {
    title: "Recopilación de trabajos 2025",
    description: "Video recopilando trabajos de facultad del año 2025.",
    link: "https://youtu.be/FkZMTmnFSAA", // Reemplazá con el link real si lo tenés
    image: fotocarpeta4, // Asegurate de tener esta imagen importada
    tags: [TAGS.NEXT],
  },
  {
    title: "Video Domera.uy",
    description:
      "Pieza audiovisual para redes sociales mostrando que es Domera.uy.",
    link: "https://youtube.com/shorts/HMv1cagfVjY", // Reemplazá con el link real si lo tenés
    image: imagenDomera, // Asegurate de tener esta imagen importada
    tags: [TAGS.NEXT],
  },
  {
    title: "Video Amélie Ocean Residences",
    description:
      "Pieza audiovisual para redes sociales que presenta el proyecto inmobiliario Amélie Ocean Residences.",
    link: "https://youtube.com/shorts/-q1Ho86mwfU?feature=share", // Reemplazá con el link real si lo tenés
    image: imagenAmelie, // Asegurate de tener esta imagen importada
    tags: [TAGS.NEXT],
  },
  {
    title: "Motion Graphics Voces Anónimas",
    description:
      "Un video Motion Graphics que muestra el proyecto Voces Anónimas.",
    link: "https://youtu.be/U6FtcuM6QAU",
    image: imagenMotionVoces,
    tags: [TAGS.NEXT],
  },
  {
    title: "Recopilación de trabajos 2023",
    description:
      "Video recopilando brevemente trabajos de facultad del año 2023.",
    link: "https://youtu.be/JGSDgqFpfnw?si=mCrISxhvBtzUPqzD",
    github: "",
    image: imagenCarpetaAnual,
    tags: [TAGS.NEXT],
  },
  {
    title: "Pokedex",
    description: "Una web de pokemon mostrando una nueva forma de pokedex.",
    link: "https://pokemon-apps-zeta.vercel.app",
    image: imagenPokemon,
    tags: [TAGS.AFTEREFEECTS, TAGS.TAILWIND],
  },
  {
    title: "Lyrics Video Nunca Estoy",
    description:
      "Un video Motion Graphics basado en la canción Nunca Estoy de C. Tangana.",
    link: "https://youtu.be/0iQ_QL0pFG8?si=JWQxCJYdbx2dfVN9",
    image: imagenNuncaEstoy,
    tags: [TAGS.NEXT],
  },
];
