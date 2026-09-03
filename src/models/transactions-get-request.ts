import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsGetRequestOptionsSchema,
  type TransactionsGetRequestOptions,
} from "./transactions-get-request-options.js";

export type TransactionsGetRequest = {
  clientId?: string;
  options?: TransactionsGetRequestOptions;
  accessToken: string;
  secret?: string;
  startDate: string;
  endDate: string;
};

export const transactionsGetRequestSchema: Schema<TransactionsGetRequest> = s.object<TransactionsGetRequest>({
  clientId: s.optional(s.string()),
  options: s.optional(s.lazy(() => transactionsGetRequestOptionsSchema)),
  accessToken: s.string(),
  secret: s.optional(s.string()),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    startDate: "start_date",
    endDate: "end_date",
  },
});
