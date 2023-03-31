import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import categoriesData from "../data/categories";
import CategoryCard from "../components/CategoryCard";

export default function AllCategories() {
  return (
    <PageTemplate title="All Categories">
      <Cards>
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Cards>
    </PageTemplate>
  );
}

const Cards = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
