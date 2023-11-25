import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotificationItem.module.scss";
import { Notification } from "../../model/types/notification";
import { Card, ThemeCard } from "shared/ui/Card/Card";
import { Text } from "shared/ui/Text/Text";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
  const { className, item } = props;
  const content = (
    <Card
      theme={ThemeCard.OUTLINED}
      className={classNames(cls.notificationItem, {}, [className])}
    >
      <Text text={item.description} title={item.title} />
    </Card>
  );
  if (item.href) {
    return (
      <a className={cls.link} target="_blank" href={item.href}>
        {content}
      </a>
    );
  }
  return content;
};
