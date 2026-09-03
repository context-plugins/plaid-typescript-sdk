import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type2 = {
  Cancelled: "cancelled",
  ChargedOff: "charged off",
  Claim: "claim",
  Consolidated: "consolidated",
  Deferment: "deferment",
  Delinquent: "delinquent",
  Discharged: "discharged",
  Extension: "extension",
  Forbearance: "forbearance",
  InGrace: "in grace",
  InMilitary: "in military",
  InSchool: "in school",
  NotFullyDisbursed: "not fully disbursed",
  Other: "other",
  PaidInFull: "paid in full",
  Refunded: "refunded",
  Repayment: "repayment",
  Transferred: "transferred",
  PendingIdr: "pending idr",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
