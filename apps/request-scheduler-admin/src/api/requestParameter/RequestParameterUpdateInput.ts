import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type RequestParameterUpdateInput = {
  name?: string | null;
  url?: UrlWhereUniqueInput | null;
  value?: string | null;
};
