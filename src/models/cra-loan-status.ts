import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the loan. */
export const CraLoanStatus = {
  Approved: "APPROVED",
  Declined: "DECLINED",
  Booked: "BOOKED",
  Current: "CURRENT",
  Delinquent: "DELINQUENT",
  Default: "DEFAULT",
  ChargedOff: "CHARGED_OFF",
  Transferred: "TRANSFERRED",
  PaidOff: "PAID_OFF",
  Other: "OTHER",
} as const;
export type CraLoanStatus = (typeof CraLoanStatus)[keyof typeof CraLoanStatus] | (string & {});

export const craLoanStatusSchema: EnumSchema<CraLoanStatus> = s.enumOf<CraLoanStatus>(CraLoanStatus);
