import Home from "shared/assets/icons/home_icon.svg";
import About from "shared/assets/icons/about_icon.svg";
import Profile from "shared/assets/icons/profile_icon.svg";
import Articles from "shared/assets/icons/articles_icon.svg";
import ArticleDetails from "shared/assets/icons/article_details_icon.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { SidebarItemType } from "./types/sidebar";

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
  {
    path: RoutePath.articles,
    icon: ArticleDetails,
    text: "Articles",
    authOnly: true,
  },
  // {
  //   path: RoutePath.article_details,
  //   icon: ArticleDetails,
  //   text: "Article Details",
  //   authOnly: true,
  // },
];
