import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToogle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-toggle" onClick={onToogle}>
        clcijk
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
