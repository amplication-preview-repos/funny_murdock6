import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type RequestParameterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: UrlWhereUniqueInput;
  value?: StringNullableFilter;
};
