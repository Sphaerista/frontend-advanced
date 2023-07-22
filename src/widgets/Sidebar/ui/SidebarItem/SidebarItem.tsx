import cls from "./SidebarItem.module.scss";
import { AppLinkTheme, AppLink } from "shared/ui/AppLink/AppLink";
import { t } from "i18next";
import { SidebarItemType } from "../../model/items";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props;

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
