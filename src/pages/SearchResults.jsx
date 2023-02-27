import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";
import { useContext } from "react";
import AppContext from "../AppContext";
import ProductCard from "../components/ProductCard";

export default function SearchResults() {
  const { allProducts, searchTarget } = useContext(AppContext);

  let matches;

  if (searchTarget !== "") {
    matches = allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchTarget.toLowerCase())
    );
  } else {
    matches = [];
  }

  return (
    <PageTemplate title="Search results">
      {matches.map((match) => (
        <ProductCard key={match.id} item={match} />
      ))}
      {matches.length === 0 && <NoMatches>No matching results found</NoMatches>}
    </PageTemplate>
  );
}

const NoMatches = styled.div`
  color: var(--text-color-secondary);
`;
