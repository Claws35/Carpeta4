import imagenMotionVoces from "../../img/projects/fotoVocesAnimacion.webp";

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
    name: "After Effects",
    class: "bg-[#D291FF] text-black",
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
    title: "Carpeta Anual 3",
    description:
      "Video recopilando brevemente trabajos de facultad del año 2023.",
    link: "https://youtu.be/JGSDgqFpfnw?si=mCrISxhvBtzUPqzD",
    github: "",
    image: "src/img/projects/hola.webp",
    tags: [TAGS.NEXT],
  },
  {
    title: "Lyrics Video Nunca Estoy",
    description:
      "Un video Motion Graphics basado en la canción Nunca Estoy de C. Tangana.",
    link: "https://youtu.be/0iQ_QL0pFG8?si=JWQxCJYdbx2dfVN9",
    image: "src/img/projects/introImagenNuncaEstoy2.webp",
    tags: [TAGS.NEXT],
  },
];
