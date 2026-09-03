import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentsTransactionsGetRequestOptionsSchema,
  type InvestmentsTransactionsGetRequestOptions,
} from "./investments-transactions-get-request-options.js";

export type InvestmentsTransactionsGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  startDate: string;
  endDate: string;
  options?: InvestmentsTransactionsGetRequestOptions;
};

export const investmentsTransactionsGetRequestSchema: Schema<InvestmentsTransactionsGetRequest> =
  s.object<InvestmentsTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    options: s.optional(s.lazy(() => investmentsTransactionsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
