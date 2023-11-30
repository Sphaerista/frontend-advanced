import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Card.module.scss";
import { HTMLAttributes, ReactNode } from "react";

export enum ThemeCard {
  NORMAL = "normal",
  OUTLINED = "outlined",
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeCard;
  max?: boolean;
}

export const Card: React.FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeCard.NORMAL,
    max,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
