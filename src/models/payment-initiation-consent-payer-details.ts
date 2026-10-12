import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";
import {
  paymentInitiationConsentPayerNumbersSchema,
  type PaymentInitiationConsentPayerNumbers,
} from "./payment-initiation-consent-payer-numbers.js";

/**
 * An object representing the payment consent payer details. Payer `name` and account `numbers` are
 * required to lock the account to which the consent can be created.
 */
export type PaymentInitiationConsentPayerDetails = {
  /** The name of the payer as it appears in their bank account */
  name: string;
  /** The payer's bank account numbers. Exactly one of IBAN or Bacs data is required. */
  numbers: PaymentInitiationConsentPayerNumbers;
  /**
   * The optional address of the payment recipient's bank account. Required by most institutions
   * outside of the UK.
   */
  address?: PaymentInitiationAddress | null;
  /**
   * The payer's birthdate, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format.
   */
  dateOfBirth?: string | null;
  /** The payer's phone numbers in E.164 format: +{countrycode}{number} */
  phoneNumbers?: string[];
  /** The payer's emails */
  emails?: string[];
};

export const paymentInitiationConsentPayerDetailsSchema: Schema<PaymentInitiationConsentPayerDetails> =
  s.object<PaymentInitiationConsentPayerDetails>({
    name: s.string(),
    numbers: paymentInitiationConsentPayerNumbersSchema,
    address: s.optionalNullable(s.lazy(() => paymentInitiationAddressSchema)),
    dateOfBirth: s.optionalNullable(s.dateOnly()),
    phoneNumbers: s.optional(s.array(s.string())),
    emails: s.optional(s.array(s.string())),
    _keysMap: {
      dateOfBirth: "date_of_birth",
      phoneNumbers: "phone_numbers",
    },
  });
