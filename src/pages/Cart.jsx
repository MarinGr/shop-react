import { useState, useContext } from "react";
import AppContext from "../AppContext";
import styled from "styled-components";
import { sectionPadding, sectionTitle } from "../assets/styles/styles";
import CartItem from "../components/CartItem";
import { MdArrowForwardIos } from "react-icons/md";

export default function Cart() {
  const { cart } = useContext(AppContext);

  let sum = 0;

  if (cart.length > 1) {
    const totalc = cart.map((item) => item.item.price * item.quantity);
    sum = totalc.reduce((a, b) => a + b);
  }

  if (cart.length == 1) {
    sum = cart[0].item.price * cart[0].quantity;
  }

  const [showError, setShowError] = useState(false);

  return (
    <Container>
      <Title>Cart</Title>
      <ContentContainer>
        <ProductsContainer>
          {cart.map((item) => (
            <CartItem
              key={item.item.id}
              item={item.item}
              quantity={item.quantity}
            />
          ))}
        </ProductsContainer>
        {cart.length >= 1 && (
          <TotalContainer>
            <Total>Total cost: $ {sum}</Total>
            <InfoContainer>
              <InfoTitle>Product cost:</InfoTitle>
              <InfoNumber>$ {sum}</InfoNumber>
            </InfoContainer>
            <InfoContainer>
              <InfoTitle>Delivery:</InfoTitle>
              <InfoNumber>$ 0</InfoNumber>
            </InfoContainer>
            <PromoContainer>
              <Promo>
                <PromoInput
                  type="text"
                  max="10"
                  placeholder="Enter promocode..."
                />
                <PromoBtn onClick={() => setShowError(true)}>
                  <MdArrowForwardIos />
                </PromoBtn>
              </Promo>
              {showError && <ErrorMessage>Inactive promocode</ErrorMessage>}
            </PromoContainer>
            <BuyBtn>Buy now</BuyBtn>
          </TotalContainer>
        )}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  ${sectionPadding}
  padding-top: 60px;
  background-color: var(--main-bg-color);
`;

const Title = styled.h2`
  ${sectionTitle}
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px 0;

  @media (max-width: 990px) {
    justify-content: space-between;
  }

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const TotalContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 420px) {
    gap: 20px;
    width: 100%;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;

  @media (max-width: 990px) {
    flex: 0;
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
`;

const InfoTitle = styled.p`
  @media (max-width: 420px) {
    font-weight: 400;
  }
`;

const InfoNumber = styled.div`
  font-size: 22px;
`;

const Total = styled.div`
  font-weight: 600;
  font-size: 24px;
`;

const PromoContainer = styled.div``;

const Promo = styled.div`
  background-color: var(--card-bg-color);
  border: 1px dashed var(--text-color-secondary);
  border-radius: 5px;
  padding: 12px 16px;
  position: relative;
`;

const PromoInput = styled.input`
  background-color: inherit;
  width: 100%;
`;

const PromoBtn = styled.button`
  background-color: var(--secondary-color);
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`;

const ErrorMessage = styled.div`
  background-color: var(--error-message-bg-color);
  color: var(--error-message-text-color);
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 12px;
`;

const BuyBtn = styled.button`
  background-color: var(--black);
  padding: 16px 20px;
  color: var(--white);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`;
