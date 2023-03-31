import styled from "styled-components";
import { sectionPadding, pageTitle } from "../assets/styles/styles";

export default function PageTemplate(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <ItemsContainer>{props.children}</ItemsContainer>
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding};
  padding-top: 60px;
  background-color: var(--main-bg-color);
`;

const Title = styled.h1`
  ${pageTitle}
`;

const ItemsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;
