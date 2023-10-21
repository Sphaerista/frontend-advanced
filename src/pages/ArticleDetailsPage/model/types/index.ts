import { ArticleDeatilsCommentsSchema } from "./ArticleDeatilsCommentsSchema";
import { ArticleDeatilsRecommendationsSchema } from "./ArticleDeatilsRecommendationsSchema";

export interface ArticleDeatilsPageSchema {
  comments: ArticleDeatilsCommentsSchema;
  recommendations: ArticleDeatilsRecommendationsSchema;
}
