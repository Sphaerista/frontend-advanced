import cls from "./SidebarItem.module.scss";
import { AppLinkTheme, AppLink } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/types/sidebar";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo((props) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }
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
