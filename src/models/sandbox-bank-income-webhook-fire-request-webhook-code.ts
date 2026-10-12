import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The webhook codes this endpoint can be used to test */
export const SandboxBankIncomeWebhookFireRequestWebhookCode = {
  BankIncomeRefreshUpdate: "BANK_INCOME_REFRESH_UPDATE",
  BankIncomeRefreshComplete: "BANK_INCOME_REFRESH_COMPLETE",
} as const;
export type SandboxBankIncomeWebhookFireRequestWebhookCode =
  | (typeof SandboxBankIncomeWebhookFireRequestWebhookCode)[keyof typeof SandboxBankIncomeWebhookFireRequestWebhookCode]
  | (string & {});

export const sandboxBankIncomeWebhookFireRequestWebhookCodeSchema: EnumSchema<SandboxBankIncomeWebhookFireRequestWebhookCode> =
  s.enumOf<SandboxBankIncomeWebhookFireRequestWebhookCode>(SandboxBankIncomeWebhookFireRequestWebhookCode);
