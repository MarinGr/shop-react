import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import AppContext from "../AppContext";
import {
  subtractAmount,
  increaseAmount,
  unFav,
  addFav,
} from "../utils/helpers";

export default function ProductCard({ item }) {
  const { addToCart, addFavourite, removeFavourite } = useContext(AppContext);

  const [amount, setAmount] = useState(1);

  const cost = item.price?.toFixed(2);
  const newPrice = ((item.price * item.discount) / 100)?.toFixed(2);

  return (
    <Container>
      <Link to={`/products/${item.id}`} key={item.id}>
        <CardImgContainer>
          <CardImg src={item.img} alt={item.title} />
          {item.discount && <SaleBadge>{item.discount} %</SaleBadge>}
          {item.favourite === true ? (
            <FavIcon onClick={(e) => unFav(e, item, removeFavourite)} />
          ) : (
            <NotFavIcon
              onClick={(e) => {
                addFav(e, item, addFavourite);
              }}
            />
          )}
        </CardImgContainer>
        <CardTextContent>
          <Title>{item.title}</Title>
          <Details>
            <Units>{item.unit}</Units>
            <Rating>
              <StarIcon />
              <RatingNumber>{item.rating}</RatingNumber>
            </Rating>
          </Details>
          {item.discount ? (
            <PriceContainer>
              <LastPrice> $ {cost}</LastPrice>
              <Price>$ {newPrice}</Price>
            </PriceContainer>
          ) : (
            <Price>$ {cost}</Price>
          )}
        </CardTextContent>
      </Link>
      <Controls>
        <AmountControls>
          <AmountBtn onClick={() => subtractAmount(amount, setAmount)}>
            −
          </AmountBtn>
          <Amount
            type="number"
            min="1"
            max="2"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <AmountBtn onClick={() => increaseAmount(setAmount)}>+</AmountBtn>
        </AmountControls>
        <AddToCart>
          <AddAction onClick={() => addToCart(item, amount)}>
            Add to Cart
          </AddAction>
          <FaShoppingCart />
        </AddToCart>
      </Controls>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--main-bg-color);
  width: 260px;
  height: 420px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.2);
  }
`;

const CardImgContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  background-color: var(--card-bg-color);
  border-radius: 12px;
  position: relative;
  margin-bottom: 12px;
`;

const CardImg = styled.img`
  filter: drop-shadow(4px 6px 24px rgba(0, 0, 0, 0.16));
`;

const SaleBadge = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  width: 44px;
  height: 20px;
  background-color: var(--sale-badge-color);
  border-radius: 4px;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  letter-spacing: 0.02em;
`;

const favIconStyles = css`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const NotFavIcon = styled(FiHeart)`
  ${favIconStyles}
  color: var(--notfav-icon-color);
`;

const FavIcon = styled(FaHeart)`
  ${favIconStyles}
  color: var(--fav-icon-color);
`;

const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  transition: 0.3s ease-in-out;
`;

const Details = styled.div`
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Units = styled.div`
  font-size: 13px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color-secondary);
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RatingNumber = styled.p`
  font-weight: 600;
  font-size: 13px;
`;

const StarIcon = styled(AiFillStar)`
  color: var(--primary-color);
`;

const PriceContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const LastPrice = styled.p`
  margin-top: 10px;
  font-weight: 600;
  font-size: 22px;
  color: var(--text-color-secondary);
  text-decoration: line-through;
`;

const Price = styled.p`
  margin-top: 10px;
  font-weight: 600;
  font-size: 22px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const AmountControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AmountBtn = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color);
  border: 1px solid var(--amount-btn-border-color);
  border-radius: 6px;
  font-size: 21px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: var(--primary-color);
  }
`;

const Amount = styled.input`
  font-size: 21px;
  width: 32px;
  background-color: inherit;
  text-align: center;
`;

const AddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

const AddAction = styled.p`
  font-weight: 600;
  font-size: 15px;
`;
