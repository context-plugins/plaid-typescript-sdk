import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsSyncRequestOptionsSchema,
  type TransactionsSyncRequestOptions,
} from "./transactions-sync-request-options.js";

export type TransactionsSyncRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  cursor?: string;
  count?: number;
  options?: TransactionsSyncRequestOptions;
};

export const transactionsSyncRequestSchema: Schema<TransactionsSyncRequest> =
  s.object<TransactionsSyncRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    cursor: s.optional(s.string()),
    count: s.optional(s.number()),
    options: s.optional(s.lazy(() => transactionsSyncRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
