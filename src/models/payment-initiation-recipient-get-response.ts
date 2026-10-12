import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";
import { recipientBacsNullableSchema, type RecipientBacsNullable } from "./recipient-bacs-nullable.js";

/**
 * PaymentInitiationRecipientGetResponse defines the response schema for
 * `/payment_initiation/recipient/get`
 */
export type PaymentInitiationRecipientGetResponse = {
  /** The ID of the recipient. */
  recipientId: string;
  /** The name of the recipient. */
  name: string;
  /**
   * The optional address of the payment recipient's bank account. Required by most institutions
   * outside of the UK.
   */
  address?: PaymentInitiationAddress | null;
  /** The International Bank Account Number (IBAN) for the recipient. */
  iban?: string | null;
  /**
   * An object containing a Bacs account number and sort code. If an IBAN is not provided or if this
   * recipient needs to accept domestic GBP-denominated payments, Bacs data is required.
   */
  bacs?: RecipientBacsNullable | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const paymentInitiationRecipientGetResponseSchema: Schema<PaymentInitiationRecipientGetResponse> =
  s.object<PaymentInitiationRecipientGetResponse>({
    recipientId: s.string(),
    name: s.string(),
    address: s.optionalNullable(s.lazy(() => paymentInitiationAddressSchema)),
    iban: s.optionalNullable(s.string()),
    bacs: s.optionalNullable(s.lazy(() => recipientBacsNullableSchema)),
    requestId: s.string(),
    _keysMap: {
      recipientId: "recipient_id",
      requestId: "request_id",
    },
  });
