import Home from "shared/assets/icons/home_icon.svg";
import About from "shared/assets/icons/about_icon.svg";
import Profile from "shared/assets/icons/profile_icon.svg";
import ArticleDetails from "shared/assets/icons/article_details_icon.svg";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "shared/const/router";
import { SidebarItemType } from "../types/sidebar";
import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      icon: Home,
      text: "Home",
    },
    {
      path: getRouteAbout(),
      icon: About,
      text: "About",
    },
  ];
  if (userData?.id) {
    SidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        icon: Profile,
        text: "Profile",
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        icon: ArticleDetails,
        text: "Articles",
        authOnly: true,
      }
    );
  }
  return SidebarItemsList;
});
