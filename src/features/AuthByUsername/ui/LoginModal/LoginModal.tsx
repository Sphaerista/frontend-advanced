import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import LoginForm from "../LoginForm/LoginForm";

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
      <Suspense fallback={<Loader />}>
        {/* <LoginFormAsync /> */}
        <LoginForm autofocus={autofocus} />
      </Suspense>
    </Modal>
  );
};
