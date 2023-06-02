import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.BACKGROUND_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("login")}
      </Button>
      <LoginModal isOpen={isOpen} onClose={onToggleModal} />
    </div>
  );
};

// crfc
