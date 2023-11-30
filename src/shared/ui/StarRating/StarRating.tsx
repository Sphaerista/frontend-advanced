import { classNames } from "shared/lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import StarRatingIcon from "shared/assets/icons/star_rating_icon.svg";
import { useState } from "react";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: React.FC<StarRatingProps> = (props) => {
  const { className, onSelect, selectedStars = 0 } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };
  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((starNumber) => (
        <div
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          className={classNames(cls.divIcon, { [cls.selected]: isSelected }, [
            className,
          ])}
          onClick={onClick(starNumber)}
        >
          <StarRatingIcon
            className={classNames(cls.starIcon, {}, [
              currentStarsCount >= starNumber ? cls.hovered : cls.normal,
            ])}
          />
        </div>
      ))}
    </div>
  );
};
