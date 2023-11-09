import React, { memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername/ui";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { Text, ThemeText } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [autofocus, setAutofocus] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const dispatch = useDispatch();

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
    setAutofocus((prev) => !prev);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsOpen(false);
  }, [authData]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          theme={ThemeText.INVERTED}
          className={cls.appName}
          title={"Musor LTD."}
        />
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
          to={RoutePath.article_create}
        >
          {t("Create article")}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
            ...(isAdminPanelAvailable
              ? [{ content: t("admin"), href: RoutePath.admin_panel }]
              : []),
            { content: t("profile"), href: RoutePath.profile + authData.id },
            { content: t("logout"), onClick: onLogout },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
        {/* <Button
          className={cls.links}
          theme={ThemeButton.CLEAR}
          onClick={onLogout}
        >
          {t("logout")}
        </Button> */}
      </header>
    );
  }
  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("login")}
      </Button>
      <LoginModal
        isOpen={isOpen}
        onClose={onToggleModal}
        autofocus={autofocus}
      />
    </header>
  );
});

// crfc
