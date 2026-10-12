import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recipientBacsNullableSchema, type RecipientBacsNullable } from "./recipient-bacs-nullable.js";

/** Details about external payment refund */
export type ExternalPaymentRefundDetails = {
  /** The name of the account holder. */
  name: string;
  /** The International Bank Account Number (IBAN) for the account. */
  iban: string | null;
  /**
   * An object containing a Bacs account number and sort code. If an IBAN is not provided or if this
   * recipient needs to accept domestic GBP-denominated payments, Bacs data is required.
   */
  bacs: RecipientBacsNullable | null;
};

export const externalPaymentRefundDetailsSchema: Schema<ExternalPaymentRefundDetails> =
  s.object<ExternalPaymentRefundDetails>({
    name: s.string(),
    iban: s.nullable(s.string()),
    bacs: s.nullable(s.lazy(() => recipientBacsNullableSchema)),
  });
