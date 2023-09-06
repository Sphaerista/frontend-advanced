import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Code.module.scss";
import { Button, ThemeButton } from "../Button/Button";
import CopyIcon from "shared/assets/icons/copy_icon.svg";
import { useCallback } from "react";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: React.FC<CodeProps> = (props) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        className={cls.copyBtn}
        theme={ThemeButton.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>;
    </pre>
  );
};
