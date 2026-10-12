import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The legal structure or type of business entity */
export const BusinessEntityType = {
  SoleProprietorship: "sole_proprietorship",
  GeneralPartnership: "general_partnership",
  Llc: "llc",
  Llp: "llp",
  Lllp: "lllp",
  Lp: "lp",
  CCorporation: "c_corporation",
  SCorporation: "s_corporation",
  BCorporation: "b_corporation",
  Nonprofit: "nonprofit",
  Cooperative: "cooperative",
  Trust: "trust",
  ProfessionalAssociation: "professional_association",
  ProfessionalCorporation: "professional_corporation",
  TradeName: "trade_name",
  Bank: "bank",
  CreditUnion: "credit_union",
  Insurance: "insurance",
  Other: "other",
  Unknown: "unknown",
} as const;
export type BusinessEntityType = (typeof BusinessEntityType)[keyof typeof BusinessEntityType] | (string & {});

export const businessEntityTypeSchema: EnumSchema<BusinessEntityType> =
  s.enumOf<BusinessEntityType>(BusinessEntityType);
