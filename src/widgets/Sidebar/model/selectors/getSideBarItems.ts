import Home from "shared/assets/icons/home_icon.svg";
import About from "shared/assets/icons/about_icon.svg";
import Profile from "shared/assets/icons/profile_icon.svg";
import ArticleDetails from "shared/assets/icons/article_details_icon.svg";
import { RoutePath } from "shared/const/router";
import { SidebarItemType } from "../types/sidebar";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const SidebarItemsList: SidebarItemType[] = [
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
  ];
  if (userData?.id) {
    SidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        icon: Profile,
        text: "Profile",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        icon: ArticleDetails,
        text: "Articles",
        authOnly: true,
      }
    );
  }
  return SidebarItemsList;
});
