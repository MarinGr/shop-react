import styled from "styled-components";
import { sectionPadding } from "../../assets/styles/styles";
import phone from "../../assets/images/mobileApp/phone.png";
import phoneSmall from "../../assets/images/mobileApp/phone-small.png";
import appStore from "../../assets/images/mobileApp/app-store.png";
import appStoreSmall from "../../assets/images/mobileApp/app-store-small.png";
import googlePlay from "../../assets/images/mobileApp/google-play.png";
import googlePlaySmall from "../../assets/images/mobileApp/google-play-small.png";

export default function MobileApp() {
  return (
    <Container>
      <ContentContainer>
        <PhoneImg src={phone} alt="Mobile App" />
        <PhoneSmallImg src={phoneSmall} alt="Mobile App" />
        <TextContent>
          <Title>Shop faster with foodmart App</Title>
          <Desc>
            Download our mobile app to get access to information about all
            special offers
          </Desc>
          <Stores>
            <StoreImg src={appStore} alt="App Store" />
            <StoreImg src={googlePlay} alt="Google Play" />
            <StoreImgSmall src={appStoreSmall} alt="App Store" />
            <StoreImgSmall src={googlePlaySmall} alt="Google Play" />
          </Stores>
        </TextContent>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding}

  @media (max-width: 420px) {
    padding: 60px 0;
  }
`;

const ContentContainer = styled.div`
  background: var(--mobile-bg-color);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 110px 230px;
  border-radius: 46px;
  position: relative;

  @media (max-width: 990px) {
    padding: 60px;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 420px) {
    border-radius: 0;
    padding: 60px 30px;
    justify-content: flex-end;
  }
`;

const PhoneImg = styled.img`
  position: absolute;
  left: 220px;

  @media (max-width: 1280px) {
    left: 120px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const PhoneSmallImg = styled.img`
  display: none;

  @media (max-width: 990px) {
    display: block;
  }

  @media (max-width: 420px) {
    position: absolute;
    transform: rotate(20deg);
    top: -40px;
    left: -20px;
    z-index: 0;
  }
`;

const TextContent = styled.div`
  max-width: 65%;
  z-index: 1;

  @media (max-width: 1440px) {
    max-width: 50%;
  }

  @media (max-width: 990px) {
    max-width: 100%;
  }

  @media (max-width: 420px) {
    max-width: 65%;
  }
`;

const Title = styled.h2`
  font-family: var(--font-family-secondary);
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  margin-bottom: 24px;

  @media (max-width: 420px) {
    font-size: 24px;
    line-height: 120%;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 220%;
  letter-spacing: 0.03em;
  color: var(--offer-text-color);
  margin-bottom: 50px;

  @media (max-width: 420px) {
    font-size: 14px;
    line-height: 120%;
  }
`;

const Stores = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StoreImg = styled.img`
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

const StoreImgSmall = styled.img`
  display: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 420px) {
    display: block;
  }
`;
