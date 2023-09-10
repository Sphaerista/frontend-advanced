import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";

export interface ArticleDeatilsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
