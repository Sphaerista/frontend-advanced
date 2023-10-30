import { Menu } from "@headlessui/react";
import cls from "./Dropdown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

const mapDirectionClass: Record<DropdownDirection, string> = {
  "top right": cls.optionsTopRight,
  "top left": cls.optionsTopLeft,
  "bottom right": cls.optionsBottomRight,
  "bottom left": cls.optionsBottomLeft,
};

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = "bottom right" } = props;
  const menuClasses = [mapDirectionClass[direction]];
  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              type="button"
              disabled={item.disabled}
              className={classNames(cls.item, { [cls.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                key={String(item.content)}
                disabled={item.disabled}
                to={item.href}
                refName="href"
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              as="div"
              key={String(item.content)}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
