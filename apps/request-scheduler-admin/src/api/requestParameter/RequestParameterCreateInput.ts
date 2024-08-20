import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type RequestParameterCreateInput = {
  name?: string | null;
  url?: UrlWhereUniqueInput | null;
  value?: string | null;
};
