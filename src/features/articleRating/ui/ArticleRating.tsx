import { RatingCard } from "entities/RatingCard";
import { useTranslation } from "react-i18next";
import { useGetArticleRating, useRateArticle } from "../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { useCallback } from "react";

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: React.FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? "",
  });

  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? "",
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [rateArticleMutation, userData?.id, articleId]
  );
  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );
  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }
  return (
    <RatingCard
      rate={rating?.rate}
      className={className}
      feedbackTitle={t("Leave the feedback")}
      hasFeedback
      title={t("Rate the article")}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
};
export default ArticleRating;
