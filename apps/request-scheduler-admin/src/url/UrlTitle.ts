import { Url as TUrl } from "../api/url/Url";

export const URL_TITLE_FIELD = "address";

export const UrlTitle = (record: TUrl): string => {
  return record.address?.toString() || String(record.id);
};
