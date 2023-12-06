import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { articleDetailsPageRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice";
import { ArticleDeatilsPageSchema } from "../types";

export const articleDetailsPageReducer =
  combineReducers<ArticleDeatilsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
  });
