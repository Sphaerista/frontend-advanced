import { UserRole } from "entities/User/model/consts/consts";
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
