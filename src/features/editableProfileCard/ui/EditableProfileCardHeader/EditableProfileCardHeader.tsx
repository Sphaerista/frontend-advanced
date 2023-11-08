import { getUserAuthData } from "entities/User";
import { getProfileReadonly } from "features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "features/editableProfileCard/model/services/updateProfileData/updateProfileData";
import { profileActions } from "features/editableProfileCard/model/slice/profileSlice";
import { getProfileData } from "pages/ProfilePage";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: React.FC<
  EditableProfileCardHeaderProps
> = (props) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const readonly = useSelector(getProfileReadonly);
  // can combine these two selectors in one selector
  // and return canEdit
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames("", {}, [className])}>
      <Text title={t("Profile")} />
      {canEdit && (
        <>
          {readonly ? (
            <Button
              theme={ThemeButton.OUTLINE}
              onClick={onEdit}
              data-testid="EditableProfileCardHeader.EditButton"
            >
              {t("Edit")}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                theme={ThemeButton.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.CancelButton"
              >
                {t("Cancel")}
              </Button>
              <Button
                theme={ThemeButton.OUTLINE}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
              >
                {t("Save")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
