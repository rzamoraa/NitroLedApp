import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Nosotros", "Rental", "Contacto", "Soporte"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Nos respalda la",
      "alta valoración de",
      "nuestros clientes.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Amplia trayectoria", "y conocimiento", "tecnológico"],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "No tememos",
      "a los desafíos"
      
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Staff propio en",  "constante especialización"],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "Pantalla Led P2 indoor",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Pantalla Led p4 outdoor",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Pantalla Led p4 flex",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "pantalla led p3.9 outdoor",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: 'pitch: "', value: "small" },
  { label: 'pitch: "', value: "large" },
];

export const footerLinks = [
  "Politica de privacidad",
  "Terminos de uso",
  "Politicas de ventas y rental",
  "Legal"
];