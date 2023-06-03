import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  autofocus?: boolean;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose, autofocus } = props;

  return (
    <Modal
      className={classNames("", {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm autofocus={autofocus} />
    </Modal>
  );
};
