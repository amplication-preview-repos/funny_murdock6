import { RequestLog as TRequestLog } from "../api/requestLog/RequestLog";

export const REQUESTLOG_TITLE_FIELD = "status";

export const RequestLogTitle = (record: TRequestLog): string => {
  return record.status?.toString() || String(record.id);
};
