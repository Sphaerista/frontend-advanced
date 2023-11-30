import { classNames } from "shared/lib/classNames/classNames";
import cls from "./RatingCard.module.scss";
import { Card } from "shared/ui/Card/Card";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { StarRating } from "shared/ui/StarRating/StarRating";
import { useCallback, useState } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard: React.FC<RatingCardProps> = (props) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    rate,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate || 0);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
      setIsModalOpen(true);
    },
    [hasFeedback, onAccept]
  );

  const acceptHandler = useCallback(() => {
    onAccept?.(starsCount, feedback);
    setIsModalOpen(false);
  }, [starsCount, feedback, onAccept]);
  const cancelHandler = useCallback(() => {
    onCancel?.(starsCount);
    setIsModalOpen(false);
  }, [starsCount, onAccept]);

  return (
    <Card className={classNames(cls.ratingCard, {}, [className])} max>
      <VStack align="center" gap="8">
        <Text title={starsCount >= 1 ? t("Thanks for rating") : title} />
        <StarRating selectedStars={starsCount} onSelect={onSelectStars} />
      </VStack>
      <Modal isOpen={isModalOpen} lazy>
        <VStack gap="32" max>
          <Text title={feedbackTitle} />
          <Input value={feedback} onChange={setFeedback} placeholder="..." />
        </VStack>
        <HStack className={cls.btns} gap="16" justify="end">
          <Button theme={ThemeButton.OUTLINE_RED} onClick={cancelHandler}>
            {t("Cancel")}
          </Button>
          <Button onClick={acceptHandler}>{t("Send")}</Button>
        </HStack>
      </Modal>
    </Card>
  );
};
