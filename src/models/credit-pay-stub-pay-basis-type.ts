import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditPayStubPayBasisType = {
  Salary: "SALARY",
  Hourly: "HOURLY",
  Commission: "COMMISSION",
} as const;
export type CreditPayStubPayBasisType =
  | (typeof CreditPayStubPayBasisType)[keyof typeof CreditPayStubPayBasisType]
  | (string & {});

export const creditPayStubPayBasisTypeSchema: EnumSchema<CreditPayStubPayBasisType> =
  s.enumOf<CreditPayStubPayBasisType>(CreditPayStubPayBasisType);
