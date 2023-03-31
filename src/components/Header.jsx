import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import gift from "../assets/images/header/gift.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import { iconWrapper } from "../assets/styles/styles";
import Logo from "./Logo";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function showBurgerMenu() {
    setShowMenu(true);
  }

  function hideBurgerMenu() {
    setShowMenu(false);
  }

  const { seacrhTarget, setSearchTarget, cart } = useContext(AppContext);

  const cartAmount = cart.length;

  function searchTarg(e) {
    setSearchTarget(e.target.value);
  }

  const navigate = useNavigate();

  function keyDownHandler(e) {
    if (e.which === 13) {
      navigate("/search-results");
    }
  }

  return (
    <Container>
      <HeaderSection>
        <Logo />
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={seacrhTarget}
            onChange={(e) => searchTarg(e)}
            onKeyDown={keyDownHandler}
          ></SearchInput>
          <Link to="/search-results">
            <StyledSearchBtn />
          </Link>
        </SearchContainer>
        <InfoContainer>
          <SectionTitle>For support</SectionTitle>
          <SectionInfo>+123-456789</SectionInfo>
        </InfoContainer>
        <ProfileInfo>
          <Link to="/favourites">
            <Icon>
              <FaHeart />
            </Icon>
          </Link>
          <CartContainer>
            <Link to="/cart">
              <Icon>
                <FaShoppingCart />
              </Icon>
              {cartAmount > 0 && <CartCounter>{cartAmount}</CartCounter>}
            </Link>
          </CartContainer>
          {showMenu ? (
            <>
              <MenuCloseIcon onClick={hideBurgerMenu} />
              <NavDynamic>
                <NavItem>
                  <HashLink to="/#categories">Categories</HashLink>
                </NavItem>
                <NavItem>
                  <HashLink to="/#trending">Trending</HashLink>
                </NavItem>
                <NavItem>
                  <HashLink to="/#offers">Offers</HashLink>
                </NavItem>
                <NavItem>
                  <HashLink to="/#blog">Blog</HashLink>
                </NavItem>
                <NavItem>
                  <HashLink to="/#info">Info</HashLink>
                </NavItem>
              </NavDynamic>
            </>
          ) : (
            <MenuIcon onClick={showBurgerMenu} />
          )}
        </ProfileInfo>
      </HeaderSection>
      <HeaderSection nav>
        <Nav>
          <NavItem>
            <HashLink to="/#categories">Categories</HashLink>
          </NavItem>
          <NavItem>
            <HashLink to="/#trending">Trending</HashLink>
          </NavItem>
          <NavItem>
            <HashLink to="/#offers">Offers</HashLink>
          </NavItem>
          <NavItem>
            <HashLink to="/#blog">Blog</HashLink>
          </NavItem>
          <NavItem>
            <HashLink to="/#info">Info</HashLink>
          </NavItem>
        </Nav>
        <HashLink to="/#sign-up">
          <CouponsContainer>
            <GiftIcon src={gift} alt="gift" />
            <CouponsOffer>Get your coupon code</CouponsOffer>
          </CouponsContainer>
        </HashLink>
      </HeaderSection>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  border-bottom: 2px solid var(--secondary-color);

  @media (max-width: 990px) {
    border-bottom: none;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 990px) {
    position: relative;
    padding-bottom: 100px;
    display: ${(props) => props.nav && "none"};
  }
`;

const SearchContainer = styled.div`
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  flex: 1;
  max-width: 700px;
  background: var(--card-bg-color);
  padding: 13px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 21px;

  @media (max-width: 1280px) {
    max-width: 500px;
  }

  @media (max-width: 990px) {
    position: absolute;
    bottom: 20px;
    max-width: 100vw;
    width: 100%;
  }
`;

const searchStyles = css`
  font-size: 16px;
  letter-spacing: 0.01em;
  background-color: var(--card-bg-color);
`;

const SearchInput = styled.input`
  ${searchStyles}
  color: var(--text-color-primary);
  flex: 1;
`;

const StyledSearchBtn = styled(FaSearch)`
  color: var(--text-color-secondary);
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

const InfoContainer = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;

const Icon = styled.button`
  ${iconWrapper}
  background-color: var(--secondary-color);
  padding: 8px 10px;
  width: 36px;
  height: 36px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const SectionTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: var(--text-color-secondary);
`;

const SectionInfo = styled.p`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  position: relative;
`;

const CartCounter = styled.div`
  background-color: var(--primary-color);
  position: absolute;
  top: -12px;
  right: -12px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const Nav = styled.ul`
  display: flex;
  gap: 32px;

  @media (max-width: 990px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color-primary);
  padding: 8px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }

  @media (max-width: 420px) {
    width: 100%;

    &:hover {
      background-color: var(--white);
      color: var(--primary-color);
    }
  }
`;

const CouponsContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 990px) {
    display: none;
  }
`;

const GiftIcon = styled.img`
  margin-right: 14px;
`;

const CouponsOffer = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: var(--text-color-primary);
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

const burgerMenuStyles = css`
  display: none;

  @media (max-width: 990px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const MenuIcon = styled(RxHamburgerMenu)`
  ${burgerMenuStyles}
`;

const MenuCloseIcon = styled(GrClose)`
  display: none;
  ${burgerMenuStyles}
`;

const NavDynamic = styled.ul`
  display: none;

  @media (max-width: 990px) {
    width: 50%;
    background-color: var(--white);
    box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    position: absolute;
    right: 0;
    top: 55%;
    z-index: 2;
  }
`;
