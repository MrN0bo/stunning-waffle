import img2 from "../imports/2.jpeg";
import img3 from "../imports/3.jpeg";
import img4 from "../imports/4.jpeg";
import img5 from "../imports/5.jpeg";
import img6 from "../imports/6.jpeg";

export const categories = [
  {
    id: "electrodomesticos",
    name: "Electrodomésticos",
    description: "Neveras, lavadoras, estufas y más aparatos para equipar tu hogar.",
    image: img2,
    imagePosition: "object-top",
  },
  {
    id: "sanitarios",
    name: "Sanitarios",
    description: "Inodoros, lavabos y accesorios para baño.",
    image: img3,
    imagePosition: "object-bottom",
  },
  {
    id: "sillas",
    name: "Sillas",
    description: "Sillas de diferentes estilos, tamaños y materiales para el hogar u oficina.",
    image: img4,
  },
  {
    id: "puertas",
    name: "Puertas",
    description: "Puertas de madera y metal de todos los tamaños.",
    image: img5,
  },
  {
    id: "otros",
    name: "Otros Elementos",
    description: "Herramientas, materiales varios y más.",
    image: img6,
  },
];

export const products = [
  {
    id: 1,
    categoryId: "electrodomesticos",
    name: "Lavadora automática 15kg",
    price: 3500,
    condition: "Buen estado",
    image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXNoaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3Nzc5NDU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    categoryId: "electrodomesticos",
    name: "Refrigerador Mabe",
    price: 4200,
    condition: "Casi nuevo",
    image: "https://images.unsplash.com/photo-1721613877687-c9099b698faa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZyaWdlcmF0b3J8ZW58MXx8fHwxNzc3OTQ1Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    categoryId: "sanitarios",
    name: "Inodoro blanco cerámico",
    price: 850,
    condition: "Usado funcional",
    image: "https://images.unsplash.com/photo-1609946860422-5e9cefc924ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHRvaWxldHxlbnwxfHx8fDE3Nzc5NDU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    categoryId: "sillas",
    name: "Silla de comedor de madera",
    price: 2100,
    condition: "Desgaste leve",
    image: img4
  },
  {
    id: 5,
    categoryId: "puertas",
    name: "Puerta principal de madera",
    price: 1500,
    condition: "Requiere barniz",
    image: "https://images.unsplash.com/photo-1559871753-75a00941f6b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9udCUyMGRvb3J8ZW58MXx8fHwxNzc3OTQ1Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const contactInfo = {
  whatsapp: "573138473642",
  facebook: "https://www.facebook.com/marketplace/profile/100040317741501/?ref=permalink&mibextid=dXMIcH",
  phoneDisplay: "+57 313 8473642",
  address: "Cra. 24A No. 35-14 Barrio San Isidro"
};