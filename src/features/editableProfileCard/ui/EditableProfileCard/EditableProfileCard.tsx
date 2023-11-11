import { classNames } from "shared/lib/classNames/classNames";
import cls from "./EditableProfileCard.module.scss";
import { Text, ThemeText } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useCallback } from "react";
import { Country } from "entities/Country";
import { getProfileError, getProfileIsLoading } from "pages/ProfilePage";
import { ValidateProfileError } from "../../model/types/editableProfileCardSchema";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { ProfileCard } from "entities/Profile";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { VStack } from "shared/ui/Stack";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

export const EditableProfileCard: React.FC<EditableProfileCardProps> = (
  props
) => {
  const { className, id } = props;
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Server error"),
    [ValidateProfileError.NO_DATA]: t("No data"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Wrong user data"),
    [ValidateProfileError.INCORRECT_AGE]: t("Wrong age"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Wrong country"),
  };

  useInitialEffect(() => {
    if (id) dispatch(fetchProfileData(id));
  });

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8" max className={classNames("", {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={ThemeText.ERROR}
              text={validateErrorTranslates[err]}
              data-testid="EditableProfileCard.Error"
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeCity={onChangeCity}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
};
