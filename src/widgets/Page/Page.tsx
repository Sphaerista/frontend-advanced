import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import { MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getScrollByPath, scrollSaveActions } from "features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: React.FC<PageProps> = (props) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  );

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPostition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
};
