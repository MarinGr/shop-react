import styled from "styled-components";
import { sectionPadding } from "../../assets/styles/styles";
import ArticleCard from "../../components/ArticleCard";
import SectionHeader from "../../components/SectionHeader";
import articlesData from "../../data/articles";

export default function Articles() {
  const articles = articlesData.slice(0, 3);

  return (
    <Container id="blog">
      <SectionHeader
        title="Our latest articles"
        action="Read all articles"
        path="/articles"
      />
      <ArticlesContainer>
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </ArticlesContainer>
    </Container>
  );
}

const Container = styled.section`
  ${sectionPadding}
`;

const ArticlesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 990px) {
    justify-content: center;
  }
`;
