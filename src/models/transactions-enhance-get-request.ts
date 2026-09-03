import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedRawTransactionSchema,
  type ClientProvidedRawTransaction,
} from "./client-provided-raw-transaction.js";

export type TransactionsEnhanceGetRequest = {
  clientId?: string;
  secret?: string;
  accountType: string;
  transactions: ClientProvidedRawTransaction[];
};

export const transactionsEnhanceGetRequestSchema: Schema<TransactionsEnhanceGetRequest> =
  s.object<TransactionsEnhanceGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accountType: s.string(),
    transactions: s.array(s.lazy(() => clientProvidedRawTransactionSchema)),
    _keysMap: {
      clientId: "client_id",
      accountType: "account_type",
    },
  });
