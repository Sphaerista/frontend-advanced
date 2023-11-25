import { useState } from "react";
import { Listbox as HListbox } from "@headlessui/react";
import cls from "./ListBox.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { Button } from "../../../Button/Button";
import { ReactNode } from "react";
import { HStack } from "../../../Stack";
import { DropdownDirection } from "shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from "../../styles/popup.module.scss";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  label?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
}

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    defaultValue,
    onChange,
    value,
    readonly,
    label,
    direction = "bottom left",
  } = props;
  const optionsClasses = [mapDirectionClass[direction]];
  return (
    <HStack gap={"4"}>
      {label && <span>{`${label}>`}</span>}
      <HListbox
        as={"div"}
        disabled={readonly}
        className={classNames(popupCls.popup, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListbox.Option
              // as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {selected && "!!"}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
