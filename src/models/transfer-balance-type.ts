import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferBalanceType = {
  PrefundedRtpCredits: "prefunded_rtp_credits",
  PrefundedAchCredits: "prefunded_ach_credits",
} as const;
export type TransferBalanceType =
  | (typeof TransferBalanceType)[keyof typeof TransferBalanceType]
  | (string & {});

export const transferBalanceTypeSchema: EnumSchema<TransferBalanceType> =
  s.enumOf<TransferBalanceType>(TransferBalanceType);
