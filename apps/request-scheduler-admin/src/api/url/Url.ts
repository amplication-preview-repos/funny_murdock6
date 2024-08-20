import { RequestLog } from "../requestLog/RequestLog";
import { RequestParameter } from "../requestParameter/RequestParameter";

export type Url = {
  address: string | null;
  createdAt: Date;
  id: string;
  interval: number | null;
  requestLogs?: Array<RequestLog>;
  requestParameters?: Array<RequestParameter>;
  updatedAt: Date;
};
