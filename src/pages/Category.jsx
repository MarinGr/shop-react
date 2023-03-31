import { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import PageTemplate from "../components/PageTemplate";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

export default function Category() {
  const { categories, allProducts } = useContext(AppContext);

  const [category, setCategory] = useState({});
  let params = useParams();

  useEffect(() => {
    getCategoryDatails(params.id);
  }, [params.id]);

  function getCategoryDatails(id) {
    const currentCategory = categories.find((category) => category.id === id);
    setCategory(currentCategory);
  }

  const categorizedProducts = allProducts.filter(
    (product) => product.category === category.title
  );

  return (
    <PageTemplate title={category.title}>
      {categorizedProducts.map((product) => (
        <ProductCard key={product.id} item={product}>
          {product.title}
        </ProductCard>
      ))}
    </PageTemplate>
  );
}
