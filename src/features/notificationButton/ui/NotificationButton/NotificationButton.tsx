import cls from "./NotificationButton.module.scss";
import { Popover } from "shared/ui/Popups";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { NotificationList } from "entities/Notification";
import NotificationIcon from "shared/assets/icons/notification_icon.svg";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = (
  props
) => {
  const { className } = props;

  return (
    <Popover
      trigger={
        <Button theme={ThemeButton.CLEAR}>
          <NotificationIcon />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
};
