import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type RequestLogWhereInput = {
  id?: StringFilter;
  response?: StringNullableFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  url?: UrlWhereUniqueInput;
};
