import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { ChangeEvent, useMemo } from "react";

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionList = useMemo(
    () =>
      options?.map((opt) => (
        <option key={opt.value} className={cls.option} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  console.log(readonly);
  const mods: Mods = {};

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label + ">"}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};
