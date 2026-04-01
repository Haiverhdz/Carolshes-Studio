import efetoNatural1 from "../assets/gallery/efecto-natural-1.webp";
import pestatina1 from "../assets/gallery/pestanina-1.webp";
import volumenYY1 from "../assets/gallery/volumen-YY.webp";

export const NAV_LINKS = ["Inicio", "Servicios", "Galería", "Testimonios", "Contacto"];

export const SERVICES = [
  {
    category: "Pestañas",
    icon: "✦",
    items: [
      {
        name: "Efecto natural",
        description: "Extensión individual sobre cada pestaña natural, imitando su forma y dirección. Look sutil, ligero y realista.",
        duration: "15 a 20 días",
        price: "$80.000",
        retoque: "$50.000",
      },
      {
        name: "Efecto pestañina",
        description: "Extensiones más gruesas para un look oscuro, definido y ligeramente voluminoso, como pestañina puesta sin exagerar.",
        duration: "15 a 20 días",
        price: "$80.000",
        retoque: "$50.000",
      },
      {
        name: "Volumen tecnológico YY",
        description: "Extensiones en forma de Y doble. Efecto más lleno y oscuro, con acabado ligero y ordenado. Volumen suave sin verse pesado.",
        duration: "15 a 20 días",
        price: "$120.000",
        retoque: "$60.000",
      },
    ],
  },
  {
    category: "Cejas",
    icon: "◈",
    items: [
      {
        name: "Laminado de cejas",
        description: "Tratamiento que alisa y fija los vellos en la dirección deseada. Ceja más peinada, definida y con apariencia de mayor volumen.",
        duration: "1 mes",
        price: "$80.000",
        retoque: null,
      },
    ],
  },
  {
    category: "Depilaciones",
    icon: "◇",
    items: [
      {
        name: "Cejas en cera",
        description: "Retira el vello desde la raíz con cera tibia. No recomendable para pieles sensibles, con medicamentos, o piel irritada.",
        duration: null,
        price: "$20.000",
        retoque: null,
      },
      {
        name: "Axilas",
        description: "Depilación con cera tibia para un acabado limpio y duradero.",
        duration: null,
        price: "$30.000",
        retoque: null,
      },
      {
        name: "Bozo",
        description: "Depilación suave con cera para el área del labio superior.",
        duration: null,
        price: "$5.000",
        retoque: null,
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Valentina M.",
    text: "Llevo 8 meses viniendo y jamás me han decepcionado. Mis pestañas siempre perfectas.",
    stars: 5,
    style: "Classic",
  },
  {
    name: "Daniela R.",
    text: "El ambiente es precioso y ella es super detallista. Vale cada peso.",
    stars: 5,
    style: "Volume 3D",
  },
  {
    name: "Sara P.",
    text: "Vine asustada porque nunca me había puesto extensiones. Me explicó todo y quedé enamorada.",
    stars: 5,
    style: "Classic",
  },
  {
    name: "Camila T.",
    text: "El mega volume se ve increíble, no pesa nada. La atención es de otro nivel.",
    stars: 5,
    style: "Mega Volume",
  },
];

export const GALLERY = [
  { label: "Efecto Natural",     category: "Pestañas",     aspect: "tall",   img: efetoNatural1 },
  { label: "Efecto Pestañina",   category: "Pestañas",     aspect: "square", img: pestatina1 },
  { label: "Volumen YY",         category: "Pestañas",     aspect: "square", img: volumenYY1 },
  { label: "Laminado de Cejas",  category: "Cejas",        aspect: "wide",   img: "/gallery/laminado-cejas-1.jpg" },
  { label: "Depilación en Cera", category: "Depilaciones", aspect: "square", img: "/gallery/depilacion-cera-1.jpg" },
];

export const FILTERS = ["Todos", "Pestañas", "Cejas", "Depilaciones"];

export const CONTACT_INFO = [
  { icon: "📍", text: "Bello, Antioquia" },
  { icon: "⏰", text: "Lun – Sáb: 9am – 7pm" },
  { icon: "📱", text: "+57 316 407 6231" },
  { icon: "📧", text: "carolina.perez0399@gmail.com" },
];

export const WHATSAPP_NUMBER = "573164076231";
