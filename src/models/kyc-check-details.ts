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

/**
 * Additional information for the `kyc_check` (Data Source Verification) step. This field will be
 * `null` unless `steps.kyc_check` has reached a terminal state of either `success` or `failed`.
 */
export type KycCheckDetails = {
  /**
   * The outcome status for the associated Identity Verification attempt's `kyc_check` step. This
   * field will always have the same value as `steps.kyc_check`.
   */
  status: string;
  /** Result summary object specifying how the `address` field matched. */
  address: KycCheckAddressSummary;
  /** Result summary object specifying how the `name` field matched. */
  name: KycCheckNameSummary;
  /** Result summary object specifying how the `date_of_birth` field matched. */
  dateOfBirth: KycCheckDateOfBirthSummary;
  /** Result summary object specifying how the `id_number` field matched. */
  idNumber: KycCheckIdNumberSummary;
  /** Result summary object specifying how the `phone` field matched. */
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
