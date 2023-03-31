import styled, { css } from "styled-components";
import juice from "../../assets/images/mainOffers/juice.png";
import juiceSmall from "../../assets/images/mainOffers/juice-small.png";
import fruits from "../../assets/images/mainOffers/fruits.png";
import fruitsSmall from "../../assets/images/mainOffers/fruits-small.png";
import bakery from "../../assets/images/mainOffers/bakery.png";
import bakerySmall from "../../assets/images/mainOffers/bakery-small.png";
import { BsArrowRightShort } from "react-icons/bs";
import bg from "../../assets/images/mainOffers/background-pattern.png";
import { sectionPadding } from "../../assets/styles/styles";

export default function MainOffers() {
  return (
    <Wrapper>
      <Container>
        <ContentContainer>
          <MainOffer>
            <MainTextContent>
              <MainHightlight> 100% Natural</MainHightlight>
              <MainTitle>Fresh smoothie & Summer juice</MainTitle>
              <MainDesc>
                Best selling summer juice with natural extracts.
              </MainDesc>
              <MainBtn>Shop now</MainBtn>
            </MainTextContent>
            <MainImg src={juice} alt="juice" />
            <MainImgSmall src={juiceSmall} alt="juice" />
          </MainOffer>
          <SalesOffer fruits>
            <SaleTextContent>
              <SaleHightlight>20% Off</SaleHightlight>
              <SaleBadge>
                <BadgeLine />
                <BadgeText>Sale</BadgeText>
              </SaleBadge>
              <SaleTitle>Fruits & Vegetables</SaleTitle>
              <SaleBtn>
                Shop the category <BsArrowRightShort />
              </SaleBtn>
            </SaleTextContent>
            <SaleImg src={fruits} alt="fruits" fruits />
            <SaleImgSmall src={fruitsSmall} alt="fruits" fruits />
          </SalesOffer>
          <SalesOffer bakery>
            <SaleTextContent>
              <SaleHightlight>15% Off</SaleHightlight>
              <SaleBadge>
                <BadgeLine />
                <BadgeText>Sale</BadgeText>
              </SaleBadge>
              <SaleTitle>Baked products</SaleTitle>
              <SaleBtn>
                Shop the category <BsArrowRightShort />
              </SaleBtn>
            </SaleTextContent>
            <SaleImg src={bakery} alt="bakery" bakery />
            <SaleImgSmall src={bakerySmall} alt="bakery" bakery />
          </SalesOffer>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  background-image: url(${bg});
  background-position: center;
`;

const Container = styled.section`
  ${sectionPadding}
  padding: 80px 0;
`;

const ContentContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: 300px 300px;
  grid-gap: 30px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fill, 200px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainOffer = styled.div`
  background: var(--main-offer-bg);
  border-radius: 12px;
  grid-column: 1/4;
  grid-row: 1/3;
  display: flex;
  padding: 32px;
  padding-left: 100px;
  overflow: hidden;

  @media (max-width: 1280px) {
    padding: 60px;
    padding-right: 10px;
  }

  @media (max-width: 990px) {
    width: 80vw;
    gap: 30px;
  }

  @media (max-width: 420px) {
    padding: 30px;
    position: relative;
  }
`;

const textContentStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MainTextContent = styled.div`
  ${textContentStyles}
  z-index: 1;
`;

const MainHightlight = styled.p`
  font-family: var(--font-family-original);
  font-weight: 400;
  font-size: 27px;
  letter-spacing: 0.02em;
  color: var(--main-offer-hightlight-color);
  margin-bottom: 36px;
`;

const MainTitle = styled.h3`
  font-family: var(--font-family-secondary);
  font-weight: 700;
  font-size: 54px;
  line-height: 120%;
  letter-spacing: 0.02em;
  margin-bottom: 22px;

  @media (max-width: 1280px) {
    font-size: 40px;
  }

  @media (max-width: 990px) {
    font-size: 32px;
    line-height: 110%;
  }

  @media (max-width: 420px) {
    max-width: 70%;
  }
`;

const MainDesc = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: var(--offer-text-color);
  margin-bottom: 60px;

  @media (max-width: 990px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

const MainBtn = styled.button`
  padding: 18px 42px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: inherit;
  border: 1px solid var(--offer-text-color);
  border-radius: 4px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
  }

  @media (max-width: 990px) {
    padding: 16px 32px;
    width: 100%;
  }

  @media (max-width: 420px) {
    background-color: var(--black);
    color: var(--white);
  }
`;

const MainImg = styled.img`
  @media (max-width: 1024px) {
    transform: scale(0.8);
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const MainImgSmall = styled.img`
  display: none;

  @media (max-width: 990px) {
    display: block;
  }

  @media (max-width: 420px) {
    right: -40px;
    top: 20px;
    position: absolute;
    z-index: 0;
    transform: scale(0.6);
  }
`;

const SalesOffer = styled.div`
  padding: 54px;
  grid-column: 4/6;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: ${(props) =>
    props.fruits
      ? "var(--sales-offer-bg-fruits)"
      : "var(--sales-offer-bg-backed)"};

  @media (max-width: 990px) {
    width: 80vw;
  }

  @media (max-width: 420px) {
    padding: 30px;
  }
`;

const SaleTextContent = styled.div`
  ${textContentStyles};
  z-index: 1;
`;

const SaleHightlight = styled.p`
  font-family: var(--font-family-original);
  font-size: 37px;
  margin-bottom: 10px;
`;

const SaleBadge = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const BadgeLine = styled.hr`
  background-color: var(--text-color-primary);
  height: 1px;
  border: none;
  width: 48px;
  display: inline-block;
  margin-right: 6px;
`;

const BadgeText = styled.span`
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;

const SaleTitle = styled.h3`
  font-family: var(--font-family-secondary);
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.02em;
  margin-bottom: 24px;
`;

const SaleBtn = styled.button`
  background: inherit;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--offer-text-color);

  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--text-color-primary);
  }
`;

const SaleImg = styled.img`
  filter: drop-shadow(0px 4px 12px rgba(150, 155, 143, 0.72));
  right: ${(props) => (props.fruits ? "-30px" : "-140px")};
  bottom: -20px;
  position: absolute;
  z-index: 0;

  @media (max-width: 420px) {
    display: none;
  }
`;

const SaleImgSmall = styled.img`
  display: none;
  filter: drop-shadow(0px 4px 12px rgba(150, 155, 143, 0.72));
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 0;

  @media (max-width: 420px) {
    display: block;
    bottom: -10px;
    right: ${(props) => (props.fruits ? "-30px" : "-100px")};
  }
`;
