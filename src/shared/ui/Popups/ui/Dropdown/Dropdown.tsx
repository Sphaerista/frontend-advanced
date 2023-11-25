import { Menu } from "@headlessui/react";
import cls from "./Dropdown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from "../../styles/popup.module.scss";

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
    <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              onClick={item.onClick}
              type="button"
              disabled={item.disabled}
              className={classNames(cls.item, { [popupCls.active]: active })}
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
