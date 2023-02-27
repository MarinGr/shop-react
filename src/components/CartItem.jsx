import { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import styled from "styled-components";

export default function CartItem({ item, quantity }) {
  const { removeFromCart, updateAmount } = useContext(AppContext);
  const [amount, setAmount] = useState(quantity);

  const cost = item.price * quantity;

  useEffect(() => {
    updateAmount(item, amount);
  }, [amount]);

  function subtractAmount() {
    setAmount((prevAmount) => Number(prevAmount) - 1);
  }

  function increaseAmount() {
    setAmount((prevAmount) => Number(prevAmount) + 1);
  }

  return (
    <Item key={item.id}>
      <Img src={item.img} alt={item.title} />
      <TextContent>
        <Name>{item.title}</Name>
        <InfoContainer>
          <InfoTitle>Price:</InfoTitle>
          <InfoNumber>$ {item.price}</InfoNumber>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Quantity:</InfoTitle>
          <InfoNumber>
            <AmountControls>
              <AmountBtn onClick={subtractAmount}>−</AmountBtn>
              <Input
                type="number"
                name="amount"
                min="1"
                max="2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <AmountBtn onClick={increaseAmount}>+</AmountBtn>
            </AmountControls>
          </InfoNumber>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Cost:</InfoTitle>
          <InfoNumber>$ {cost}</InfoNumber>
        </InfoContainer>
        <RemoveBtn onClick={() => removeFromCart(item.id)}>Remove</RemoveBtn>
      </TextContent>
    </Item>
  );
}

const Item = styled.div`
  height: 280px;
  display: flex;
  align-items: center;
  gap: 60px;
  border-bottom: 1px solid var(--secondary-color);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 990px) {
    height: 240px;
    gap: 20px;
    align-items: flex-start;
  }

  @media (max-width: 420px) {
    height: 200px;
    gap: 10px;
  }
`;

const Img = styled.img`
  width: 200px;

  @media (max-width: 990px) {
    width: 150px;
  }

  @media (max-width: 420px) {
    width: 80px;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 420px) {
    gap: 10px;
  }
`;

const Name = styled.h2`
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 420px) {
    gap: 20px;
    font-weight: 400;
  }
`;

const InfoTitle = styled.p``;

const InfoNumber = styled.div`
  font-size: 22px;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const AmountControls = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
`;

const Input = styled.input`
  font-size: 20px;
  font-weight: inherit;
  width: 40px;
  background-color: inherit;
  text-align: center;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const AmountBtn = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: 1px solid var(--amount-btn-border-color);
  border-radius: 6px;
  font-size: 21px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: var(--primary-color);
  }
`;

const RemoveBtn = styled.button`
  background-color: inherit;
  cursor: pointer;
  color: var(--text-color-secondary);
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;
