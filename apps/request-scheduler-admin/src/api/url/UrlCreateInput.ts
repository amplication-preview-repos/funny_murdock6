import { RequestLogCreateNestedManyWithoutUrlsInput } from "./RequestLogCreateNestedManyWithoutUrlsInput";
import { RequestParameterCreateNestedManyWithoutUrlsInput } from "./RequestParameterCreateNestedManyWithoutUrlsInput";

export type UrlCreateInput = {
  address?: string | null;
  interval?: number | null;
  requestLogs?: RequestLogCreateNestedManyWithoutUrlsInput;
  requestParameters?: RequestParameterCreateNestedManyWithoutUrlsInput;
};
