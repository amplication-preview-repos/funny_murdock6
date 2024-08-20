import { Url } from "../url/Url";

export type RequestParameter = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  url?: Url | null;
  value: string | null;
};
