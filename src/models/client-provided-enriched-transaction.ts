import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientCustomizationSchema, type ClientCustomization } from "./client-customization.js";
import {
  enrichTransactionDirectionSchema,
  type EnrichTransactionDirection,
} from "./enrich-transaction-direction.js";
import { enrichmentsSchema, type Enrichments } from "./enrichments.js";

export type ClientProvidedEnrichedTransaction = {
  id: string;
  clientUserId?: string;
  clientAccountId?: string;
  accountType?: string;
  accountSubtype?: string;
  description: string;
  amount: number;
  direction?: EnrichTransactionDirection;
  isoCurrencyCode: string;
  enrichments: Enrichments;
  clientCustomization?: ClientCustomization | null;
};

export const clientProvidedEnrichedTransactionSchema: Schema<ClientProvidedEnrichedTransaction> =
  s.object<ClientProvidedEnrichedTransaction>({
    id: s.string(),
    clientUserId: s.optional(s.string()),
    clientAccountId: s.optional(s.string()),
    accountType: s.optional(s.string()),
    accountSubtype: s.optional(s.string()),
    description: s.string(),
    amount: s.number(),
    direction: s.optional(s.lazy(() => enrichTransactionDirectionSchema)),
    isoCurrencyCode: s.string(),
    enrichments: enrichmentsSchema,
    clientCustomization: s.optionalNullable(s.lazy(() => clientCustomizationSchema)),
    _keysMap: {
      clientUserId: "client_user_id",
      clientAccountId: "client_account_id",
      accountType: "account_type",
      accountSubtype: "account_subtype",
      isoCurrencyCode: "iso_currency_code",
      clientCustomization: "client_customization",
    },
  });
