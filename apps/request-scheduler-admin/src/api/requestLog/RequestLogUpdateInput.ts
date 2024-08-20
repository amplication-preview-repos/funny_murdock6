import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type RequestLogUpdateInput = {
  response?: string | null;
  status?: string | null;
  timestamp?: Date | null;
  url?: UrlWhereUniqueInput | null;
};
