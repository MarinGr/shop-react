import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <StyledLink to={`/categories/${category.id}`} key={category.id}>
      <Card>
        <CardIcon src={category.icon} alt={category.title} />
        <CardTitle>{category.title}</CardTitle>
      </Card>
    </StyledLink>
  );
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

const Card = styled.div`
  width: 220px;
  height: 220px;
  background-color: var(--main-bg-color);
  border-radius: 16px;
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 420px) {
    width: 120px;
    height: 120px;
    gap: 16px;
  }
`;

const CardIcon = styled.img``;

const CardTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;
