import { v4 as uuidv4 } from "uuid";
import vegetables from "../assets/images/categories/vegetables.png";
import bread from "../assets/images/categories/bread.png";
import drinks from "../assets/images/categories/drinks.png";
import sauces from "../assets/images/categories/sauces.png";
import meat from "../assets/images/categories/meat.png";
import fruits from "../assets/images/categories/fruits.png";
import sweets from "../assets/images/categories/sweets.png";
import snacks from "../assets/images/categories/snacks.png";

const categoriesData = [
  { id: uuidv4(), icon: fruits, title: "Fruits" },
  { id: uuidv4(), icon: vegetables, title: "Vegetables" },
  { id: uuidv4(), icon: bread, title: "Bread" },
  { id: uuidv4(), icon: sweets, title: "Sweets" },
  { id: uuidv4(), icon: drinks, title: "Drinks" },
  { id: uuidv4(), icon: sauces, title: "Sauces" },
  { id: uuidv4(), icon: meat, title: "Meat" },
  { id: uuidv4(), icon: snacks, title: "Snacks" },
];

export default categoriesData;
