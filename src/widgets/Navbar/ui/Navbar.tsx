import { memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername/ui";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Text, ThemeText } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { HStack } from "shared/ui/Stack";
import { NotificationButton } from "features/notificationButton";
import { AvatarDropdown } from "features/avatarDropdown";
import { RoutePath } from "shared/const/router";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [autofocus, setAutofocus] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
    setAutofocus((prev) => !prev);
  }, []);

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
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
