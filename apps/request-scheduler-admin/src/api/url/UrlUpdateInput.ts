import { RequestLogUpdateManyWithoutUrlsInput } from "./RequestLogUpdateManyWithoutUrlsInput";
import { RequestParameterUpdateManyWithoutUrlsInput } from "./RequestParameterUpdateManyWithoutUrlsInput";

export type UrlUpdateInput = {
  address?: string | null;
  interval?: number | null;
  requestLogs?: RequestLogUpdateManyWithoutUrlsInput;
  requestParameters?: RequestParameterUpdateManyWithoutUrlsInput;
};
