import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kycCheckAddressSummarySchema, type KycCheckAddressSummary } from "./kyc-check-address-summary.js";
import {
  kycCheckDateOfBirthSummarySchema,
  type KycCheckDateOfBirthSummary,
} from "./kyc-check-date-of-birth-summary.js";
import {
  kycCheckIdNumberSummarySchema,
  type KycCheckIdNumberSummary,
} from "./kyc-check-id-number-summary.js";
import { kycCheckNameSummarySchema, type KycCheckNameSummary } from "./kyc-check-name-summary.js";
import { kycCheckPhoneSummarySchema, type KycCheckPhoneSummary } from "./kyc-check-phone-summary.js";

export type KycCheckDetails = {
  status: string;
  address: KycCheckAddressSummary;
  name: KycCheckNameSummary;
  dateOfBirth: KycCheckDateOfBirthSummary;
  idNumber: KycCheckIdNumberSummary;
  phoneNumber: KycCheckPhoneSummary;
};

export const kycCheckDetailsSchema: Schema<KycCheckDetails> = s.object<KycCheckDetails>({
  status: s.string(),
  address: kycCheckAddressSummarySchema,
  name: kycCheckNameSummarySchema,
  dateOfBirth: kycCheckDateOfBirthSummarySchema,
  idNumber: kycCheckIdNumberSummarySchema,
  phoneNumber: kycCheckPhoneSummarySchema,
  _keysMap: {
    dateOfBirth: "date_of_birth",
    idNumber: "id_number",
    phoneNumber: "phone_number",
  },
});
