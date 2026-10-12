import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";
import { recipientBacsNullableSchema, type RecipientBacsNullable } from "./recipient-bacs-nullable.js";

/**
 * PaymentInitiationRecipientCreateRequest defines the request schema for
 * `/payment_initiation/recipient/create`
 */
export type PaymentInitiationRecipientCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The name of the recipient. We recommend using strings of length 18 or less and avoid special
   * characters to ensure compatibility with all institutions.
   */
  name: string;
  /**
   * The International Bank Account Number (IBAN) for the recipient. If Bacs data is not provided,
   * an IBAN is required.
   */
  iban?: string | null;
  /**
   * An object containing a Bacs account number and sort code. If an IBAN is not provided or if this
   * recipient needs to accept domestic GBP-denominated payments, Bacs data is required.
   */
  bacs?: RecipientBacsNullable | null;
  /**
   * The optional address of the payment recipient's bank account. Required by most institutions
   * outside of the UK.
   */
  address?: PaymentInitiationAddress | null;
};

export const paymentInitiationRecipientCreateRequestSchema: Schema<PaymentInitiationRecipientCreateRequest> =
  s.object<PaymentInitiationRecipientCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    name: s.string(),
    iban: s.optionalNullable(s.string()),
    bacs: s.optionalNullable(s.lazy(() => recipientBacsNullableSchema)),
    address: s.optionalNullable(s.lazy(() => paymentInitiationAddressSchema)),
    _keysMap: {
      clientId: "client_id",
    },
  });
