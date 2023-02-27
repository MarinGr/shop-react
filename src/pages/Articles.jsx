import PageTemplate from "../components/PageTemplate";
import ArticleCard from "../components/ArticleCard";
import articlesData from "../data/articles";

export default function Articles() {
  return (
    <PageTemplate title="Articles">
      {articlesData.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </PageTemplate>
  );
}
