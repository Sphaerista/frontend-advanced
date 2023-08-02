import Home from "shared/assets/icons/home_icon.svg";
import About from "shared/assets/icons/about_icon.svg";
import Profile from "shared/assets/icons/profile_icon.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: Home,
    text: "Home",
  },
  {
    path: RoutePath.about,
    icon: About,
    text: "About",
  },
  {
    path: RoutePath.profile,
    icon: Profile,
    text: "Profile",
    authOnly: true,
  },
];
