import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferCreditFundsSource = {
  Sweep: "sweep",
  PrefundedRtpCredits: "prefunded_rtp_credits",
  PrefundedAchCredits: "prefunded_ach_credits",
} as const;
export type TransferCreditFundsSource =
  | (typeof TransferCreditFundsSource)[keyof typeof TransferCreditFundsSource]
  | (string & {});

export const transferCreditFundsSourceSchema: EnumSchema<TransferCreditFundsSource> =
  s.enumOf<TransferCreditFundsSource>(TransferCreditFundsSource);
