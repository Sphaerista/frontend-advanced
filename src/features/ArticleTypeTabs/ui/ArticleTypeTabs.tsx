import { classNames } from "shared/lib/classNames/classNames";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/model/consts/consts";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}
export const ArticleTypeTabs: React.FC<ArticleTypeTabsProps> = (props) => {
  const { className, onChangeType, value } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t("ALL"),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t("ECONOMICS"),
      },
      {
        value: ArticleType.IT,
        content: t("IT"),
      },
      {
        value: ArticleType.SCIENCE,
        content: t("SCIENCE"),
      },
    ],
    []
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );
  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames("", {}, [className])}
    />
  );
};
