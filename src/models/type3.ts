import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type3 = {
  ExtendedGraduated: "extended graduated",
  ExtendedStandard: "extended standard",
  Graduated: "graduated",
  IncomeContingentRepayment: "income-contingent repayment",
  IncomeBasedRepayment: "income-based repayment",
  IncomeSensitiveRepayment: "income-sensitive repayment",
  InterestOnly: "interest only",
  Other: "other",
  PayAsYouEarn: "pay as you earn",
  RevisedPayAsYouEarn: "revised pay as you earn",
  Standard: "standard",
  SavingOnAValuableEducation: "saving on a valuable education",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
