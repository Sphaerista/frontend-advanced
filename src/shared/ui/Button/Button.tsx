import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, memo } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    className,
    theme = ThemeButton.OUTLINE,
    children,
    square,
    size = SizeButton.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
