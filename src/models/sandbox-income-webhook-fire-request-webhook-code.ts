import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The webhook codes that can be fired by this test endpoint. */
export const SandboxIncomeWebhookFireRequestWebhookCode = {
  IncomeVerification: "INCOME_VERIFICATION",
  IncomeVerificationRiskSignals: "INCOME_VERIFICATION_RISK_SIGNALS",
} as const;
export type SandboxIncomeWebhookFireRequestWebhookCode =
  | (typeof SandboxIncomeWebhookFireRequestWebhookCode)[keyof typeof SandboxIncomeWebhookFireRequestWebhookCode]
  | (string & {});

export const sandboxIncomeWebhookFireRequestWebhookCodeSchema: EnumSchema<SandboxIncomeWebhookFireRequestWebhookCode> =
  s.enumOf<SandboxIncomeWebhookFireRequestWebhookCode>(SandboxIncomeWebhookFireRequestWebhookCode);
