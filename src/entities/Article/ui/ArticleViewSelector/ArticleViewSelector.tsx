import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleViewSelector.module.scss";
import { ArticleView } from "entities/Article/model/types/article";
import ListSmallIcon from "../../../../shared/assets/icons/list_small.svg";
import ListBigIcon from "../../../../shared/assets/icons/list_big.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: <ListSmallIcon />,
  },
  {
    view: ArticleView.BIG,
    icon: <ListBigIcon />,
  },
];

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> = (
  props
) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ThemeButton.CLEAR}
          onClick={onClick(viewType.view)}
          className={classNames("", {
            [cls.isSelected]: viewType.view == view,
          })}
        >
          {viewType.icon}
        </Button>
      ))}
    </div>
  );
};
