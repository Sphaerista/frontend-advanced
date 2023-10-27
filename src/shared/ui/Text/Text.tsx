import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum ThemeText {
  PRIMARY = "primary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum AlignText {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export enum SizeText {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ThemeText;
  align?: AlignText;
  size?: SizeText;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeHeaderTag: Record<SizeText, HeaderTagType> = {
  [SizeText.S]: "h3",
  [SizeText.M]: "h2",
  [SizeText.L]: "h1",
};

export const Text: React.FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    theme = ThemeText.PRIMARY,
    align = AlignText.LEFT,
    size = SizeText.M,
  } = props;

  const HeaderTag = mapSizeHeaderTag[size];

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.text, mods, [className])}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
