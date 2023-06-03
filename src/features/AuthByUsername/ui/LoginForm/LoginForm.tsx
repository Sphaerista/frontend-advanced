import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string;
  autofocus?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className, autofocus } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autofocus={autofocus}
        className={cls.input}
        type="text"
        placeholder={t("username")}
      />
      <Input className={cls.input} type="text" placeholder={t("password")} />
      <Button className={cls.loginBtn} theme={ThemeButton.OUTLINE}>
        {t("login")}
      </Button>
    </div>
  );
};