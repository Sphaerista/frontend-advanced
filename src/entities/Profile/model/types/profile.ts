import { Country } from "entities/Country";

export interface Profile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  country?: Country;
  city?: string;
  avatar?: string;
}
