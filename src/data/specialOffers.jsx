import { v4 as uuidv4 } from "uuid";
import bgChocolate from "../assets/images/specialOffers/bgChocolate.png";
import bgMuffins from "../assets/images/specialOffers/bgMuffins.png";
import chocolate from "../assets/images/specialOffers/chocolate.png";
import muffins from "../assets/images/specialOffers/muffins.png";

const spacialOffersData = [
  {
    id: uuidv4(),
    bgColor: "var(--special-offer-bg-chocolate)",
    bgImg: `url(${bgChocolate})`,
    img: chocolate,
    offer: "Upto 15% Off",
    title: "Luxury Dark Chocolate",
    desc: "Chocolate is only the happiness that you can eat.",
  },
  {
    id: uuidv4(),
    bgColor: "var(--special-offer-bg-muffins)",
    bgImg: `url(${bgMuffins})`,
    img: muffins,
    offer: "Upto 25% Off",
    title: "Creamy Muffins",
    desc: "Very tasty & creamy vanilla flavour muffins.",
  },
];

export default spacialOffersData;
