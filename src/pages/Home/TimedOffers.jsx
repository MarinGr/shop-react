import { useContext } from "react";
import AppContext from "../../AppContext";
import styled from "styled-components";
import { sectionPadding, cardsContainer } from "../../assets/styles/styles";
import SectionHeader from "../../components/SectionHeader";
import ProductCard from "../../components/ProductCard";

export default function TimedOffers() {
  const { allProducts } = useContext(AppContext);

  const timedProducts = allProducts.filter((item) => item.discount);

  return (
    <Container>
      <SectionHeader
        title="Limited-time offers"
        banner={{
          desc: "Expires in:",
        }}
        controls={false}
      />
      <CardsContainer>
        {timedProducts.map((item) => (
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
  margin-top: 60px;

  @media (max-width: 420px) {
    margin-top: 100px;
  }
`;
