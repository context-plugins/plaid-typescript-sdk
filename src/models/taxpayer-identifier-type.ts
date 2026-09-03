import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaxpayerIdentifierType = {
  IndividualTaxpayerIdentificationNumber: "IndividualTaxpayerIdentificationNumber",
  SocialSecurityNumber: "SocialSecurityNumber",
} as const;
export type TaxpayerIdentifierType =
  | (typeof TaxpayerIdentifierType)[keyof typeof TaxpayerIdentifierType]
  | (string & {});

export const taxpayerIdentifierTypeSchema: EnumSchema<TaxpayerIdentifierType> =
  s.enumOf<TaxpayerIdentifierType>(TaxpayerIdentifierType);
