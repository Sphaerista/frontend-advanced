import { Country } from "shared/const/common";

export interface Profile {
  firstname: string;
  lastname: string;
  age: number;
  country: Country;
  city: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
