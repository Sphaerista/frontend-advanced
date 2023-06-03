import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { ReactNode, useEffect, useRef, useState, useCallback } from "react";
import { Portal } from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

// const ANIMATION_DELAY = 200;

export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      // setIsClosing(true);
      // timeRef.current = setTimeout(() => {
      onClose();
      setIsMounted(false);
      //   setIsClosing(false);
      // }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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
