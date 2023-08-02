import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { useMemo } from "react";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, src, size, alt } = props;
  const mods: Mods = {};
  const styles = useMemo<React.CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img
      src={src}
      className={classNames(cls.Avatar, mods, [className])}
      style={styles}
      alt={alt}
    />
  );
};
