import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, lazy } from "react";
import { Portal } from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { useModal } from "shared/lib/hooks/useModal";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

// const ANIMATION_DELAY = 200;

export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { theme } = useTheme();

  const { closeHandler, isClosing, isMounted } = useModal({ onClose, isOpen });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
