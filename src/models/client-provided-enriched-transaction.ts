import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientCustomizationSchema, type ClientCustomization } from "./client-customization.js";
import {
  enrichTransactionDirectionSchema,
  type EnrichTransactionDirection,
} from "./enrich-transaction-direction.js";
import { enrichmentsSchema, type Enrichments } from "./enrichments.js";

/** A client-provided transaction that Plaid has enriched. */
export type ClientProvidedEnrichedTransaction = {
  /** The unique ID for the transaction as provided by you in the request. */
  id: string;
  /**
   * A unique user id used to group transactions for a given user, as a unique identifier from your
   * application. Personally identifiable information, such as an email address or phone number,
   * should not be used in the `client_user_id`.
   */
  clientUserId?: string;
  /**
   * A unique account id used to group transactions for a given account, as a unique identifier from
   * your application. Personally identifiable information, such as an email address or phone
   * number, should not be used in the `client_account_id`.
   */
  clientAccountId?: string;
  /**
   * The account type associated with the transaction. For a full list of valid types and subtypes,
   * see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountType?: string;
  /**
   * The account subtype associated with the transaction. For a full list of valid types and
   * subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema).
   */
  accountSubtype?: string;
  /** The raw description of the transaction. */
  description: string;
  /** The absolute value of the transaction (>= 0) */
  amount: number;
  /**
   * The direction of the transaction from the perspective of the account holder:
   *
   * `OUTFLOW` - Includes outgoing transfers, purchases, and fees. (Typically represented as a
   * negative value on checking accounts and debit cards and a positive value on credit cards.)
   *
   * `INFLOW` - Includes incoming transfers, refunds, and income. (Typically represented as a
   * positive value on checking accounts and debit cards and a negative value on credit cards.)
   */
  direction?: EnrichTransactionDirection;
  /** The ISO-4217 currency code of the transaction e.g. USD. */
  isoCurrencyCode: string;
  /** A grouping of the Plaid produced transaction enrichment fields. */
  enrichments: Enrichments;
  /** Custom client fields */
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
    amount: s.float64(),
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
