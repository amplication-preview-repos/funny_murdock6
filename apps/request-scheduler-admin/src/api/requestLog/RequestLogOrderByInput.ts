import { SortOrder } from "../../util/SortOrder";

export type RequestLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  response?: SortOrder;
  status?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  urlId?: SortOrder;
};
