import { classNames } from "shared/lib/classNames/classNames";
import { SizeText, Text } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article";
import { useTranslation } from "react-i18next";
import { VStack } from "shared/ui/Stack";
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList: React.FC<
  ArticleRecommendationsListProps
> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

  // const recommendtions = useSelector(getArticleRecommendations.selectAll);
  // const recommendationsIsLoading = useSelector(
  //   getArticleRecommendationsIsLoading
  // );
  // dispatch(fetchArticlesRecommendations());
  if (isLoading || error || !articles) {
    return null;
  }
  return (
    <VStack gap="8" className={classNames("", {}, [className])}>
      <Text size={SizeText.L} title={t("Recommendations")} />
      <ArticleList articles={articles} target="_blank" />
    </VStack>
  );
};
