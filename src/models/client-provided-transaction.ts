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

/** A client-provided transaction for Plaid to enrich. */
export type ClientProvidedTransaction = {
  /** A unique ID for the transaction used to help you tie data back to your systems. */
  id: string;
  /**
   * The Plaid generated ID that identifies the end user for whom you would like to enrich
   * transactions.
   */
  userId?: string;
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
  /**
   * The raw description of the transaction. If you have location data in available an unstructured
   * format, it may be appended to the `description` field.
   */
  description: string;
  /**
   * The absolute value of the transaction (>= 0). When testing Enrich, note that `amount` data
   * should be realistic. Unrealistic or inaccurate `amount` data may result in reduced quality
   * output.
   */
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
  direction: EnrichTransactionDirection;
  /** The ISO-4217 currency code of the transaction e.g. USD. */
  isoCurrencyCode: string;
  /**
   * A representation of where a transaction took place.
   *
   * Use this field to pass in structured location information you may have about your transactions.
   * Providing location data is optional but can increase result quality. If you have unstructured
   * location information, it may be appended to the `description` field.
   */
  location?: ClientProvidedTransactionLocation;
  /**
   * Merchant category codes (MCCs) are four-digit numbers that describe a merchant's primary
   * business activities.
   */
  mcc?: string;
  /**
   * The date the transaction posted, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * (YYYY-MM-DD) format.
   */
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
    amount: s.float64(),
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
