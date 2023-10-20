import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Tabs.module.scss";
import { ReactNode, useCallback } from "react";
import { Card, ThemeCard } from "../Card/Card";

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TextProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs: React.FC<TextProps> = (props) => {
  const { className, tabs, value, onTabClick } = props;

  // closure principle
  const clickHandler = useCallback((tab: TabItem) => {
    return () => onTabClick(tab);
  }, []);

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? ThemeCard.NORMAL : ThemeCard.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
