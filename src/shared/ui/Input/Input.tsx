import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import { InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        autoFocus={autoFocus}
        {...otherProps}
      />
    </div>
  );
};
