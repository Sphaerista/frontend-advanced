import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSideBarItems } from "../../model/selectors/getSideBarItems";
import { VStack } from "shared/ui/Stack/index";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo((props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const sideBarItemsList = useSelector(getSideBarItems);

  const onToogle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sideBarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sideBarItemsList]
  );

  return (
    <section
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
        onClick={onToogle}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <VStack role="navigation" gap="8" className={cls.items}>
        {itemsList}
      </VStack>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </section>
  );
});

{
  /* <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={getRouteMain()}
          className={cls.item}
        >
          <Home className={cls.icon} />
          <span className={cls.link}>{t("home")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={getRouteAbout}
          className={cls.item}
        >
          <About className={cls.icon} />
          <span className={cls.link}>{t("about")}</span>
        </AppLink> */
}
