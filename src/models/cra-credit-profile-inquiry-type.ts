import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The inquiry type of credit profile report. */
export const CraCreditProfileInquiryType = {
  SoftInquiry: "SOFT_INQUIRY",
  StandardInquiry: "STANDARD_INQUIRY",
} as const;
export type CraCreditProfileInquiryType =
  | (typeof CraCreditProfileInquiryType)[keyof typeof CraCreditProfileInquiryType]
  | (string & {});

export const craCreditProfileInquiryTypeSchema: EnumSchema<CraCreditProfileInquiryType> =
  s.enumOf<CraCreditProfileInquiryType>(CraCreditProfileInquiryType);
