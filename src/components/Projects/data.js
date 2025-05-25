import imagenCarpetaAnual from "../../img/projects/hola.webp";
import imagenMotionVoces from "../../img/projects/fotoVocesAnimacion.webp";
import imagenNuncaEstoy from "../../img/projects/introImagenNuncaEstoy2.webp";
import imagenPokemon from "../../img/projects/pokemonImagen.webp";

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
    title: "Motion Graphics Voces Anónimas",
    description:
      "Un video Motion Graphics que narra la fascinante historia de la Estancia La Aurora.",
    link: "https://youtu.be/H0Bfar_mKFw",
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
