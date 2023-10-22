import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";
import { Page } from "widgets/Page/Page";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: React.FC<ArticleEditPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? t("Edit article with ID=") + id : t("Create new article")}
    </Page>
  );
};

export default ArticleEditPage;
