import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum ThemeText {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
}

export const Text: React.FC<TextProps> = memo((props) => {
  const { className, title, text, theme = ThemeText.PRIMARY } = props;

  return (
    <div className={classNames(cls.text, { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
