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
}

export const Card: React.FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeCard.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
