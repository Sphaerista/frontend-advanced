import { useSelector } from "react-redux";
import { getArticles } from "../../model/slices/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { ArticleList } from "entities/Article";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: React.FC<ArticleInfiniteListProps> = (
  props
) => {
  const { className } = props;
  const { t } = useTranslation();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return <Text>{t("Articles not found")}</Text>;
  }
  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
};
