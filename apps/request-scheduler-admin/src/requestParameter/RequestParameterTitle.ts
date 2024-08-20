import { RequestParameter as TRequestParameter } from "../api/requestParameter/RequestParameter";

export const REQUESTPARAMETER_TITLE_FIELD = "name";

export const RequestParameterTitle = (record: TRequestParameter): string => {
  return record.name?.toString() || String(record.id);
};
