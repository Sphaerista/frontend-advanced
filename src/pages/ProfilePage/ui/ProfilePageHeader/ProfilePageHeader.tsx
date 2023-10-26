import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { t } from "i18next";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { profileActions, updateProfileData } from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { HStack } from "shared/ui/Stack/index";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;

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
            <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
              {t("Edit")}
            </Button>
          ) : (
            <HStack gap="8">
              <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>
                {t("Cancel")}
              </Button>
              <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                {t("Save")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
};
