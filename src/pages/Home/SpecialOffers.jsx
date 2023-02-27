import { useContext } from "react";
import AppContext from "../../AppContext";
import styled from "styled-components";
import { sectionPadding } from "../../assets/styles/styles";

export default function SpecialOffers() {
  const { specialOffers } = useContext(AppContext);

  return (
    <Container id="offers">
      {specialOffers.map((offer) => (
        <OfferCard key={offer.id} bgColor={offer.bgColor} bgImg={offer.bgImg}>
          <OfferTextContent>
            <OfferHightlight>{offer.offer}</OfferHightlight>
            <OfferTitle>{offer.title}</OfferTitle>
            <OfferDesc>{offer.desc}</OfferDesc>
            <OfferBtn>Shop it</OfferBtn>
          </OfferTextContent>
          <OfferImg src={offer.img} alt={offer.title} />
        </OfferCard>
      ))}
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 100%;

  @media (max-width: 1440px) {
    padding: 40px;
  }
`;

const OfferCard = styled.div`
  max-width: 740px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  height: 390px;
  padding: 40px 0 40px 60px;
  border-radius: 12px;
  background-color: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImg};
  position: relative;

  @media (max-width: 420px) {
    max-width: 350px;
    height: 100%;
    padding: 30px;
  }
`;

const OfferTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const OfferHightlight = styled.p`
  font-family: var(--font-family-original);
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.025em;
  color: var(--special-offer-hightlight-color);
  margin-bottom: 26px;

  @media (max-width: 420px) {
    margin-bottom: 18px;
  }
`;

const OfferTitle = styled.p`
  font-family: var(--font-family-secondary);
  font-weight: 700;
  font-size: 34px;
  letter-spacing: 0.02em;
  margin-bottom: 6px;

  @media (max-width: 420px) {
    font-size: 24px;
  }
`;

const OfferDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: 0.03em;
  color: var(--offer-text-color);
  margin-bottom: 32px;

  @media (max-width: 420px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const OfferBtn = styled.button`
  padding: 10px 24px;
  background-color: var(--black);
  color: var(--white);
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 16px;
  margin-top: auto;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const OfferImg = styled.img`
  filter: drop-shadow(0px 14px 34px rgba(114, 137, 139, 0.39));

  @media (max-width: 420px) {
    display: none;
  }
`;
