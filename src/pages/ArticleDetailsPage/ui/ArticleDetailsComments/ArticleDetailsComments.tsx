import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addCommentForm";
import { getArticleCommentsIsLoading } from "pages/ArticleDetailsPage/model/selectors/comments";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentByArticleId";
import { getArticleComments } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { SizeText, Text } from "shared/ui/Text/Text";
import { VStack } from "shared/ui/Stack";

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments: React.FC<ArticleDetailsCommentsProps> = (
  props
) => {
  const { className, id } = props;
  const { t } = useTranslation("article");
  const dispatch = useDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <VStack gap="16" className={classNames("", {}, [className])}>
      <Text size={SizeText.L} title={t("Comments")} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  );
};
