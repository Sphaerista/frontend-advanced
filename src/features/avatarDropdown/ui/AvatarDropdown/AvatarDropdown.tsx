import { Dropdown } from "shared/ui/Popups";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { getRouteAdmin, getRouteProfile } from "shared/const/router";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown: React.FC<AvatarDropdownProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [authData]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t("admin"), href: getRouteAdmin() }]
          : []),
        { content: t("Profile"), href: getRouteProfile(authData?.id) },
        { content: t("logout"), onClick: onLogout },
      ]}
      trigger={<Avatar size={30} src={authData?.avatar} />}
    />
  );
};
