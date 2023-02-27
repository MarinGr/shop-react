import { useState, useContext, useEffect } from "react";
import AppContext from "../../AppContext";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard";
import {
  sectionPadding,
  sectionTitle,
  cardsContainer,
} from "../../assets/styles/styles";

export default function Trending() {
  const { categories, allProducts } = useContext(AppContext);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const trendingProducts = allProducts.filter((item) => item.trending === true);

  const [shownProducts, setShownProducts] = useState(trendingProducts);

  useEffect(() => {
    filterProducts();
  }, [allProducts, selectedCategory]);

  function filterProducts() {
    if (selectedCategory === "all") {
      setShownProducts(trendingProducts);
      return;
    } else {
      const categoryTrending = trendingProducts.filter(
        (item) => item.category === selectedCategory.title
      );
      setShownProducts(categoryTrending);
    }
  }

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <Container id="trending">
      <Header>
        <Title>Trending products</Title>
        <CategoriesList>
          <ListItem onClick={() => handleClick("all")}>All</ListItem>
          {categories.map((category) => (
            <ListItem
              onClick={() => handleClick(category)}
              key={category.title}
            >
              {category.title}
            </ListItem>
          ))}
        </CategoriesList>
      </Header>
      <CardsContainer>
        {shownProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </CardsContainer>
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding}
`;

const CardsContainer = styled.div`
  ${cardsContainer}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid var(--secondary-color);
  margin-bottom: 60px;
`;

const Title = styled.h3`
  ${sectionTitle}
  padding-bottom: 24px;
`;

const CategoriesList = styled.ul`
  display: flex;
  gap: 32px;

  @media (max-width: 990px) {
    display: none;
  }
`;

const ListItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color-secondary);
  padding-bottom: 24px;
  border-bottom: 2px solid var(--secondary-color);
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--text-color-primary);
    border-bottom: 2px solid var(--primary-color);
  }
`;
