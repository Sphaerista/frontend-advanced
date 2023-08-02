import { Country } from "entities/Country/model/types/country";

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  country?: Country;
  city?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
