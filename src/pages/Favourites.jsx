import { useContext } from "react";
import AppContext from "../AppContext";
import PageTemplate from "../components/PageTemplate";
import ProductCard from "../components/ProductCard";

export default function Favourites() {
  const { allProducts } = useContext(AppContext);

  const favourites = allProducts.filter((item) => item.favourite === true);

  return (
    <PageTemplate title="Favourites">
      {favourites.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </PageTemplate>
  );
}
