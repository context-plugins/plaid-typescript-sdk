import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringGetRequestOptionsSchema,
  type TransactionsRecurringGetRequestOptions,
} from "./transactions-recurring-get-request-options.js";

export type TransactionsRecurringGetRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  options?: TransactionsRecurringGetRequestOptions;
  accountIds?: string[];
};

export const transactionsRecurringGetRequestSchema: Schema<TransactionsRecurringGetRequest> =
  s.object<TransactionsRecurringGetRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    options: s.optional(s.lazy(() => transactionsRecurringGetRequestOptionsSchema)),
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountIds: "account_ids",
    },
  });
