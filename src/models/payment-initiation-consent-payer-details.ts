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

export type PaymentInitiationConsentPayerDetails = {
  name: string;
  numbers: PaymentInitiationConsentPayerNumbers;
  address?: PaymentInitiationAddress | null;
  dateOfBirth?: string | null;
  phoneNumbers?: string[];
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
