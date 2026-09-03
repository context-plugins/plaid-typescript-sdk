import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraLoanApplicationDecision = {
  Approved: "APPROVED",
  Declined: "DECLINED",
  Other: "OTHER",
} as const;
export type CraLoanApplicationDecision =
  | (typeof CraLoanApplicationDecision)[keyof typeof CraLoanApplicationDecision]
  | (string & {});

export const craLoanApplicationDecisionSchema: EnumSchema<CraLoanApplicationDecision> =
  s.enumOf<CraLoanApplicationDecision>(CraLoanApplicationDecision);
