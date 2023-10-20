import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector: React.FC<ArticleSortSelectorProps> = (
  props
) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("ascending"),
      },
      {
        value: "desc",
        content: t("descending"),
      },
    ],
    []
  );
  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("bycreated"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("bytitle"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("byviews"),
      },
    ],
    []
  );

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        value={sort}
        options={sortFieldOptions}
        onChange={onChangeSort}
        label={t("Sort")}
      />
      <Select
        className={cls.order}
        value={order}
        options={orderOptions}
        onChange={onChangeOrder}
        label={t("by")}
      />
    </div>
  );
};
