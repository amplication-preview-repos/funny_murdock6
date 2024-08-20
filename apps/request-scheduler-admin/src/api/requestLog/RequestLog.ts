import { Url } from "../url/Url";

export type RequestLog = {
  createdAt: Date;
  id: string;
  response: string | null;
  status: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  url?: Url | null;
};
