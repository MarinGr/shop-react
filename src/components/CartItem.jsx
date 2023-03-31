import { useState, useEffect, useContext } from "react";
import AppContext from "../AppContext";
import styled from "styled-components";

export default function CartItem({ item, quantity }) {
  const { removeFromCart, updateAmount } = useContext(AppContext);
  const [amount, setAmount] = useState(quantity);
  const [addBackBtn, setAddBackBtn] = useState(false);

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

  function changeAmount(e) {
    if (e.target.value > 0) {
      setAmount(e.target.value);
    } else {
      setAmount("");
    }
  }

  function addBackToCart() {
    setAddBackBtn(false);
    setAmount(1);
  }

  function onOutsideClick(e) {
    if (e.target.value == "") {
      setAddBackBtn(true);
    }
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
        {addBackBtn ? (
          <InfoContainer>
            <AddBackBtn onClick={addBackToCart}>Add back to cart</AddBackBtn>
          </InfoContainer>
        ) : (
          <InfoContainer>
            <InfoTitle>Quantity:</InfoTitle>
            <InfoNumber>
              <AmountControls>
                <AmountBtn
                  disabled={amount > 1 ? false : true}
                  onClick={subtractAmount}
                >
                  −
                </AmountBtn>
                <Input
                  type="number"
                  name="amount"
                  min="1"
                  max="2"
                  onkeyup="if(this.value<0)this.value=1"
                  value={amount}
                  onChange={(e) => changeAmount(e)}
                  onBlur={(e) => onOutsideClick(e)}
                />
                <AmountBtn
                  disabled={amount > 99 ? true : false}
                  onClick={increaseAmount}
                >
                  +
                </AmountBtn>
              </AmountControls>
            </InfoNumber>
          </InfoContainer>
        )}
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
  gap: 80px;
  border-bottom: 1px solid var(--secondary-color);
  transition: 0.3s ease-in-out;

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
  width: 30%;

  @media (max-width: 990px) {
    width: 100%;
    gap: 10px;
  }

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
  background: ${(props) =>
    props.disabled ? "var(--secondary-color)" : "inherit"};
  color: ${(props) =>
    props.disabled ? "var(--text-color-secondary)" : "inherit"};

  &:hover {
    background: ${(props) =>
      props.disabled ? "var(--secondary-color)" : "var(--primary-color)"};
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

const AddBackBtn = styled.button`
  background-color: var(--primary-color-light);
  width: 100%;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }
`;
