import styled, { css } from "styled-components";
import { sectionPadding } from "../assets/styles/styles";
import youtube from "../assets/images/footer/youtube.png";
import vk from "../assets/images/footer/vk.png";
import telegram from "../assets/images/footer/telegram.png";
import Logo from "./Logo";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <Container id="info">
      <MainInfo>
        <NavSection>
          <NavColumn>
            <Title>Quick links</Title>
            <ColumnList>
              <ColumnItem>
                <HashLink to="/#categories">Categories</HashLink>
              </ColumnItem>
              <ColumnItem>
                <HashLink to="/#trending">Trending</HashLink>
              </ColumnItem>
              <ColumnItem>
                <HashLink to="/#offers">Offers</HashLink>
              </ColumnItem>
              <ColumnItem>
                <HashLink to="/#blog">Blog</HashLink>
              </ColumnItem>
            </ColumnList>
          </NavColumn>
          <NavColumn>
            <Title>About</Title>
            <ColumnList>
              <ColumnItem>How it works</ColumnItem>
              <ColumnItem>Our packages</ColumnItem>
              <ColumnItem>Promotions</ColumnItem>
              <ColumnItem>Careers</ColumnItem>
            </ColumnList>
          </NavColumn>
          <NavColumn>
            <Title>Help Centre</Title>
            <ColumnList>
              <ColumnItem>Payments</ColumnItem>
              <ColumnItem>Shipping</ColumnItem>
              <ColumnItem>Product returns</ColumnItem>
              <ColumnItem>FAQs</ColumnItem>
            </ColumnList>
          </NavColumn>
        </NavSection>
        <IconsSection>
          <Logo />
          <SocialIcons>
            <IconContainer>
              <Icon src={youtube} alt="Youtube" />
            </IconContainer>
            <IconContainer>
              <Icon src={vk} alt="Vk" />
            </IconContainer>
            <IconContainer>
              <Icon src={telegram} alt="Telegram" />
            </IconContainer>
          </SocialIcons>
        </IconsSection>
      </MainInfo>
      <CopyrightInfo>
        <Copyright>© 2023 TemplatesJungle. All rights reserved.</Copyright>
        {/* <Copyright>Design by TemplatesJungle</Copyright> */}
        <Copyright>
          <p>
            Free Template by
            <a href="https://templatesjungle.com/"> TemplatesJungle</a>
          </p>
        </Copyright>
      </CopyrightInfo>
    </Container>
  );
}

const Container = styled.footer`
  ${sectionPadding}
  margin-top: auto;
`;

const MainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 990px) {
    flex-direction: column;
  }

  @media (max-width: 420px) {
    gap: 40px;
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 80px;

  @media (max-width: 990px) {
    justify-content: space-between;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  margin-bottom: 14px;

  @media (max-width: 420px) {
    font-size: 20px;
    line-height: 120%;
  }
`;

const descStyles = css`
  font-size: 16px;
  line-height: 200%;
  letter-spacing: 0.02em;
  color: var(--text-color-secondary);

  @media (max-width: 420px) {
    line-height: 180%;
  }
`;

const ColumnList = styled.ul``;

const ColumnItem = styled.li`
  ${descStyles}
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

const IconsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 54px;

  @media (max-width: 1024px) {
    flex: 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  background: var(--main-bg-color);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const CopyrightInfo = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Copyright = styled.p`
  ${descStyles}
`;
