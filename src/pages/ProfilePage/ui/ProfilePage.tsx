import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./profilePage.module.scss";
import { t } from "i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface profilePageProps {
  className?: string;
}

const ProfilePage: React.FC<profilePageProps> = (props) => {
  const { className } = props;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>{t("Profile Page")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
