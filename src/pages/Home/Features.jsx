import styled from "styled-components";
import { sectionPadding } from "../../assets/styles/styles";
import featuresData from "../../data/features";

export default function Features() {
  return (
    <Container>
      {featuresData.map((feature) => (
        <Card key={feature.title}>
          <TitleContainer>
            <Icon src={feature.icon} alt={feature.title} />
            <Title>{feature.title}</Title>
          </TitleContainer>
          <CardHr />
          <Desc>{feature.desc}</Desc>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  ${sectionPadding}
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 58px;

  @media (max-width: 990px) {
    justify-content: center;
    gap: 40px;
  }
`;

const Card = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  &:hover {
    > hr {
      width: 100%;
    }
  }
`;

const CardHr = styled.hr`
  border: 1px solid var(--primary-color);
  width: 50%;
  transition: 0.5s ease-in-out;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 30%;
`;

const Icon = styled.img`
  @media (max-width: 420px) {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  padding: 12px;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 200%;
  letter-spacing: 0.02em;
  color: var(--text-color-secondary);

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
