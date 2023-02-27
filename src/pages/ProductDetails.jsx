import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../AppContext";
import styled, { css } from "styled-components";
import { sectionPadding } from "../assets/styles/styles";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import {
  subtractAmount,
  increaseAmount,
  unFav,
  addFav,
} from "../utils/helpers";

export default function ProductDetails() {
  const { addToCart, allProducts, addFavourite, removeFavourite } =
    useContext(AppContext);

  const [item, setItem] = useState({});
  const [cost, setCost] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [amount, setAmount] = useState(1);
  let params = useParams();

  useEffect(() => {
    getItemDatails(params.id);
  }, [params.id, allProducts]);

  useEffect(() => {
    setCost(item.price?.toFixed(2));
    setNewPrice(((item.price * item.discount) / 100)?.toFixed(2));
  }, [item]);

  async function getItemDatails(id) {
    const currentProduct = await allProducts.find((item) => item.id === id);
    setItem(currentProduct);
  }

  return (
    <Container>
      <ProductContainer>
        {item.discount && <SaleBadge>{item.discount} %</SaleBadge>}
        <Img src={item.img} />
        <TextContent>
          <Title>{item.title}</Title>
          <Rating>
            <StarIcon />
            <RatingNumber>{item.rating}</RatingNumber>
          </Rating>
          {item.discount ? (
            <PriceContainer>
              <LastPrice> $ {cost}</LastPrice>
              <Price>$ {newPrice}</Price>
            </PriceContainer>
          ) : (
            <Price>$ {cost}</Price>
          )}
          <Units>{item.unit}</Units>
          <Controls>
            <AmountControls>
              <AmountBtn onClick={() => subtractAmount(amount, setAmount)}>
                −
              </AmountBtn>
              <Input
                type="number"
                required="required"
                min="1"
                max="2"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <AmountBtn onClick={() => increaseAmount(setAmount)}>+</AmountBtn>
            </AmountControls>
            <AddContainer>
              <CartIcon />
              <AddBtn onClick={() => addToCart(item, amount)}>
                Add to cart
              </AddBtn>
            </AddContainer>
            {item.favourite === true ? (
              <FavIcon onClick={(e) => unFav(e, item, removeFavourite)} />
            ) : (
              <NotFavIcon onClick={(e) => addFav(e, item, addFavourite)} />
            )}
          </Controls>
        </TextContent>
      </ProductContainer>
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding}
`;

const ProductContainer = styled.div`
  padding: 60px 120px 60px 0;
  width: fit-content;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  border-radius: 20px;
  box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.08);
  position: relative;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;

  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
  }
`;

const SaleBadge = styled.div`
  position: absolute;
  left: 32px;
  top: 32px;
  width: 60px;
  height: 30px;
  background-color: var(--sale-badge-color);
  border-radius: 4px;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  letter-spacing: 0.02em;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-family: var(--font-family-secondary);
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 6px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const RatingNumber = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

const StarIcon = styled(AiFillStar)`
  color: var(--primary-color);
  font-size: 20px;
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
  font-size: 28px;
  margin-bottom: 6px;
`;

const Units = styled.div`
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color-secondary);
  margin-bottom: 16px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AmountControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 10px;
`;

const Input = styled.input`
  font-size: 21px;
  width: 40px;
  background-color: inherit;
  text-align: center;
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
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--primary-color);
  }
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--black);
  color: var(--white);
  padding: 12px 16px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 20px;
`;

const AddBtn = styled.button`
  background-color: inherit;
`;

const favIconStyles = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const NotFavIcon = styled(FiHeart)`
  ${favIconStyles}
  color: var( --notfav-icon-color);
`;

const FavIcon = styled(FaHeart)`
  ${favIconStyles}
  color:var( --fav-icon-color);
`;
