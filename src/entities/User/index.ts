import { getUserAuthData } from "./model/selectors/getUserAuthData";
import { getUserInited } from "./model/selectors/getUserInited";
import {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from "./model/selectors/roleSelectors";
import { userActions, userReducer } from "./model/slice/userSlice";
import { UserSchema, User } from "./model/types/userSchema";

export {
  userActions,
  userReducer,
  getUserAuthData,
  getUserInited,
  isUserAdmin,
  isUserManager,
  getUserRoles,
};

export type { UserSchema, User };
