import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RequestLogListRelationFilter } from "../requestLog/RequestLogListRelationFilter";
import { RequestParameterListRelationFilter } from "../requestParameter/RequestParameterListRelationFilter";

export type UrlWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  interval?: IntNullableFilter;
  requestLogs?: RequestLogListRelationFilter;
  requestParameters?: RequestParameterListRelationFilter;
};
