import styled from "styled-components";
import { FaCalendar } from "react-icons/fa";

export default function ArticleCard({ article }) {
  return (
    <Container>
      <Img src={article.img} alt={article.title} />
      <DateContainer>
        <FaCalendar />
        <Date>{article.date}</Date>
      </DateContainer>
      <Title>{article.title}</Title>
      <Desc>{article.desc}</Desc>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--main-bg-color);
  width: 450px;
  height: 676px;
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 420px) {
    max-width: 80vw;
    height: 100%;
  }
`;

const Img = styled.img`
  margin-bottom: 24px;
  transform: scale(0.8);
  align-self: center;

  @media (max-width: 420px) {
    display: none;
  }
`;

const DateContainer = styled.div`
  font-size: 13px;
  color: var(--text-color-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
`;

const Date = styled.p`
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 170%;
  margin-bottom: 10px;

  @media (max-width: 420px) {
    font-size: 20px;
    line-height: 140%;
  }
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 220%;
  letter-spacing: 0.02em;
  color: var(--text-color-secondary);

  @media (max-width: 420px) {
    font-size: 14px;
    line-height: 120%;
  }
`;
