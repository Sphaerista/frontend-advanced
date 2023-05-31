import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

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
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        asset main.9e4ea0e053a76390b01a.hot-update.json 28 bytes [emitted]
        [immutable] [hmr] Entrypoint main 4.15 MiB =
        main.6a2efda5bbf211b31ab0.js 4.14 MiB
        main.9e4ea0e053a76390b01a.hot-update.js 10.1 KiB
      </Modal>
    </div>
  );
};

// crfc
