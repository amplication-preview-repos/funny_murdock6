import { RequestParameterWhereInput } from "./RequestParameterWhereInput";
import { RequestParameterOrderByInput } from "./RequestParameterOrderByInput";

export type RequestParameterFindManyArgs = {
  where?: RequestParameterWhereInput;
  orderBy?: Array<RequestParameterOrderByInput>;
  skip?: number;
  take?: number;
};
