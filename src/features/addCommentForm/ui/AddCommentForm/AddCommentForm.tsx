import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AddCommentForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "shared/ui/Stack";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: React.FC<AddCommentFormProps> = (props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    // saving value to state
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        max
        justify="between"
        className={classNames(cls.addCommentForm, {}, [className])}
      >
        <Input
          className={cls.input}
          placeholder={t("Comment Text")}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
          {t("Send")}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
