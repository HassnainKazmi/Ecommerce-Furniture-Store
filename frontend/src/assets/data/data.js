import bedroom from "../images/bedroom.png";
import decor from "../images/decor.png";
import livingroom from "../images/living-room.png";
import office from "../images/office.png";
import product01B from "../images/product-01-black.jpg";
import product01G from "../images/product-01-gold.jpg";
import product01BR from "../images/product-01-bronze.jpg";
import product10B from "../images/product-10-black.jpg";
import product10G from "../images/product-10-gold.jpg";
import product10BR from "../images/product-10-bronze.jpg";
import product12B from "../images/product-12-black.jpg";
import product12G from "../images/product-12-gold.jpg";
import product12BR from "../images/product-12-bronze.jpg";
import product13B from "../images/product-13-black.jpg";
import product13G from "../images/product-13-gold.jpg";
import product13BR from "../images/product-13-bronze.jpg";
import product02B from "../images/product-02-black.jpg";
import product02G from "../images/product-02-gold.jpg";
import product02BR from "../images/product-02-bronze.jpg";
import product11B from "../images/product-11-black.jpg";
import product11G from "../images/product-11-gold.jpg";
import product11BR from "../images/product-11-bronze.jpg";

export const categories = [
  {
    id: 0,
    image: bedroom,
    productName: "Bedroom",
    quantity: "6 products",
  },
  {
    id: 1,
    image: decor,
    productName: "Decor",
    quantity: "9 products",
  },
  {
    id: 2,
    image: livingroom,
    productName: "Living Room",
    quantity: "6 products",
  },
  {
    id: 3,
    image: office,
    productName: "Office",
    quantity: "11 products",
  },
];

export const featuredProducts = [
  {
    id: 0,
    image: [product01B, product01BR, product01G], // Match the order of colors
    productName: "Product 01",
    price: "$85.00 - $90.00",
    colors: ["#000000", "#8f6453", "#dabca2"],
  },
  {
    id: 1,
    image: [product10B, product10BR, product10G], // Match the order of colors
    productName: "Product 10",
    price: "$85.00 - $90.00",
    colors: ["#000000", "#8f6453", "#dabca2"],
  },
  {
    id: 2,
    image: [product12B, product12BR, product12G], // Match the order of colors
    productName: "Product 12",
    price: "$85.00 - $90.00",
    colors: ["#000000", "#8f6453", "#dabca2"],
  },
  {
    id: 3,
    image: [product13B, product13BR, product13G], // Match the order of colors
    productName: "Product 13",
    price: "$85.00 - $90.00",
    colors: ["#000000", "#8f6453", "#dabca2"],
  },
  {
    id: 4,
    image: [product02B, product02BR, product02G], // Match the order of colors
    productName: "Product 2",
    price: "$85.00 - $90.00",
    colors: ["#000000", "#8f6453", "#dabca2"],
  },
  {
    id: 5,
    image: [product11B, product11BR, product11G], // Match the order of colors
    productName: "Product 11",
    price: "$85.00 - $90.00",
    colors: ["#000000", "#8f6453", "#dabca2"],
  },
];
