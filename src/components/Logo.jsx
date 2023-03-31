import styled from "styled-components";
import logoImg from "../assets/images/logo/logo-img.png";
import logoText from "../assets/images/logo/logo-text.png";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <LogoFull>
        <LogoImg src={logoImg} alt="logo image" />
        <LogoText src={logoText} alt="logo text" />
      </LogoFull>
    </Link>
  );
}

const LogoFull = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
`;

const LogoImg = styled.img``;

const LogoText = styled.img`
  @media (max-width: 1024px) {
    display: none;
  }
`;
