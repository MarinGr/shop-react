import { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "../../AppContext";
import SectionHeader from "../../components/SectionHeader";
import { sectionPadding } from "../../assets/styles/styles";
import CategoryCard from "../../components/CategoryCard";

export default function Categories() {
  const { categories } = useContext(AppContext);

  const [shownCategories, setShownCategories] = useState(
    categories.slice(0, 6)
  );

  function forwardClick() {
    setShownCategories(categories.slice(6, categories.lenght));
  }

  function backwardClick() {
    setShownCategories(categories.slice(0, 6));
  }

  return (
    <Container id="categories">
      <SectionHeader
        title="Categories"
        action="View all categories"
        controls={true}
        path="/categories"
        forwardClick={forwardClick}
        backwardClick={backwardClick}
      />
      <Cards>
        {shownCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Cards>
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding}
`;

const Cards = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 990px) {
    justify-content: center;
  }
`;
