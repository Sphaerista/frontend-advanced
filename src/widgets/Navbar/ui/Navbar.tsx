import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername/ui";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [autofocus, setAutofocus] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
    setAutofocus((prev) => !prev);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsOpen(false);
  }, [authData]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          className={cls.links}
          theme={ThemeButton.CLEAR}
          onClick={onLogout}
        >
          {t("logout")}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
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
    </div>
  );
};

// crfc
