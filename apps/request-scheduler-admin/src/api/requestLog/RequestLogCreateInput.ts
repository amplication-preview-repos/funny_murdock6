import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type RequestLogCreateInput = {
  response?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  url?: UrlWhereUniqueInput | null;
};
