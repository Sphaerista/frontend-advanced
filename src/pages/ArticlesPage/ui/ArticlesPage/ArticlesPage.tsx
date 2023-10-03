import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleList } from "entities/Article";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("article");

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList isLoading={true} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
