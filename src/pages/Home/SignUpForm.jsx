import styled, { css } from "styled-components";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { sectionPadding } from "../../assets/styles/styles";
import Modal from "../../components/Modal";

export default function SignUpForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [message, setMessage] = useState("");

  const [showError, setShowError] = useState(false);

  const [showModal, setShowModal] = useState(false);

  function validateInputs() {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (
      regEx.test(userData.email) &&
      userData.password === userData.confirmedPassword &&
      userData.password !== ""
    ) {
      setMessage("");
      setShowError(false);
      setShowModal(true);
      clearInputs();
      return;
    }

    if (userData.password !== userData.confirmedPassword) {
      setShowError(true);
      setMessage("Passwords don't match");
    } else if (userData.password === "") {
      setShowError(true);
      setMessage("Fill in your password");
    }

    if (regEx.test(userData.email)) {
      setShowError(false);
      setMessage("");
    } else if (!regEx.test(userData.email) || userData.email === "") {
      setShowError(true);
      setMessage("Invalid email");
    }
  }

  function submitForm(e) {
    e.preventDefault();
    validateInputs();
  }

  function clearInputs() {
    setUserData({
      email: "",
      password: "",
      confirmedPassword: "",
    });
  }

  return (
    <Container id="sign-up">
      <FormTextContent>
        <Modal show={showModal} onClose={() => setShowModal(false)} />
        <FormTitle>
          Get <TitleHightlight>20% discount</TitleHightlight> <br />
          on your first purchase
        </FormTitle>
        <FormDesc>
          Just sign up to become member of Foodmart loyalty program
        </FormDesc>
      </FormTextContent>
      <Form>
        {showError && <ErrorMessage>{message}</ErrorMessage>}
        <InputGroup>
          <Label>Email address</Label>
          <InputContainer>
            <EmailIcon />
            <Input
              type="email"
              required="required"
              placeholder="Type your email..."
              value={userData.email}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <InputContainer>
            <PasswordIcon />
            <Input
              type="password"
              required="required"
              placeholder="Create password..."
              value={userData.password}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }))
              }
            />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <Label>Confirm password</Label>
          <InputContainer>
            <PasswordIcon />
            <Input
              type="password"
              required="required"
              placeholder="Repeat password..."
              value={userData.confirmedPassword}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  confirmedPassword: e.target.value,
                }))
              }
            />
          </InputContainer>
        </InputGroup>
        <SubmitBtn onClick={(e) => submitForm(e)}>Sign up</SubmitBtn>
      </Form>
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding}
  padding: 130px 200px;
  background: var(--sign-up-bg-color);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 160px;

  @media (max-width: 1280px) {
    padding: 80px 120px;
  }

  @media (max-width: 1024px) {
    gap: 100px;
  }

  @media (max-width: 990px) {
    padding: 60px;
    gap: 40px;
    flex-direction: column;
    margin: 0 auto;
    max-width: 80vw;
  }

  @media (max-width: 420px) {
    padding: 30px;
    gap: 30px;
  }
`;

const FormTextContent = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1024px) {
    max-width: 300px;
  }

  @media (max-width: 990px) {
    max-width: 100%;
  }
`;

const FormTitle = styled.h2`
  font-family: var(--font-family-secondary);
  font-weight: 700;
  font-size: 50px;
  line-height: 140%;

  @media (max-width: 1024px) {
    font-size: 44px;
    line-height: 120%;
  }

  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

const TitleHightlight = styled.span`
  color: var(--main-offer-hightlight-color);
`;

const FormDesc = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 220%;
  letter-spacing: 0.02em;
  color: var(--offer-text-color);

  @media (max-width: 420px) {
    font-size: 16px;
    line-height: 120%;
  }
`;

const Form = styled.form`
  width: 50%;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

const ErrorMessage = styled.div`
  background-color: var(--error-message-bg-color);
  color: var(--error-message-text-color);
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 12px 0;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: var(--dark-gray);
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--main-bg-color);
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
`;

const iconStyles = css`
  color: var(--sign-up-icons-color);
`;

const EmailIcon = styled(MdEmail)`
  ${iconStyles};
  font-size: 18px;
`;

const PasswordIcon = styled(FaLock)`
  ${iconStyles}
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  background: inherit;
`;

const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 54px;
  background-color: var(--black);
  color: var(--white);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--main-offer-hightlight-color);
  }

  @media (max-width: 420px) {
    margin-top: 40px;
    padding: 16px;
    font-weight: 400;
  }
`;
