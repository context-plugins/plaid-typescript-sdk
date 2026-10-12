import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A value from a MISMO prescribed list that classifies identification numbers used by the Internal
 * Revenue Service (IRS) in the administration of tax laws. A Social Security number (SSN) is issued
 * by the SSA; all other taxpayer identification numbers are issued by the IRS.
 */
export const TaxpayerIdentifierType = {
  IndividualTaxpayerIdentificationNumber: "IndividualTaxpayerIdentificationNumber",
  SocialSecurityNumber: "SocialSecurityNumber",
} as const;
export type TaxpayerIdentifierType =
  | (typeof TaxpayerIdentifierType)[keyof typeof TaxpayerIdentifierType]
  | (string & {});

export const taxpayerIdentifierTypeSchema: EnumSchema<TaxpayerIdentifierType> =
  s.enumOf<TaxpayerIdentifierType>(TaxpayerIdentifierType);
