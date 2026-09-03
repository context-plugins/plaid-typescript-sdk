import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  clientProvidedTransactionLocationSchema,
  type ClientProvidedTransactionLocation,
} from "./client-provided-transaction-location.js";
import {
  enrichTransactionDirectionSchema,
  type EnrichTransactionDirection,
} from "./enrich-transaction-direction.js";

export type ClientProvidedTransaction = {
  id: string;
  userId?: string;
  clientUserId?: string;
  clientAccountId?: string;
  accountType?: string;
  accountSubtype?: string;
  description: string;
  amount: number;
  direction: EnrichTransactionDirection;
  isoCurrencyCode: string;
  location?: ClientProvidedTransactionLocation;
  mcc?: string;
  datePosted?: string;
};

export const clientProvidedTransactionSchema: Schema<ClientProvidedTransaction> =
  s.object<ClientProvidedTransaction>({
    id: s.string(),
    userId: s.optional(s.string()),
    clientUserId: s.optional(s.string()),
    clientAccountId: s.optional(s.string()),
    accountType: s.optional(s.string()),
    accountSubtype: s.optional(s.string()),
    description: s.string(),
    amount: s.number(),
    direction: enrichTransactionDirectionSchema,
    isoCurrencyCode: s.string(),
    location: s.optional(s.lazy(() => clientProvidedTransactionLocationSchema)),
    mcc: s.optional(s.string()),
    datePosted: s.optional(s.dateOnly()),
    _keysMap: {
      userId: "user_id",
      clientUserId: "client_user_id",
      clientAccountId: "client_account_id",
      accountType: "account_type",
      accountSubtype: "account_subtype",
      isoCurrencyCode: "iso_currency_code",
      datePosted: "date_posted",
    },
  });
