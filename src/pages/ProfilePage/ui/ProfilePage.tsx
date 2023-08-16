import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./profilePage.module.scss";
import { t } from "i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  ProfileCard,
  fetchProfileData,
  getProfileValidateErrors,
  profileActions,
  profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProfileData, getProfileError, getProfileIsLoading } from "../index";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileReadonly } from "entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Country } from "entities/Country";
import { Text, ThemeText } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface profilePageProps {
  className?: string;
}

const ProfilePage: React.FC<profilePageProps> = (props) => {
  const { className } = props;
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

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

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
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={ThemeText.ERROR}
              text={validateErrorTranslates[err]}
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
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
