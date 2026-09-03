import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxBankIncomeWebhookFireRequestWebhookCodeSchema,
  type SandboxBankIncomeWebhookFireRequestWebhookCode,
} from "./sandbox-bank-income-webhook-fire-request-webhook-code.js";
import {
  sandboxBankIncomeWebhookFireRequestWebhookFieldsSchema,
  type SandboxBankIncomeWebhookFireRequestWebhookFields,
} from "./sandbox-bank-income-webhook-fire-request-webhook-fields.js";

export type SandboxBankIncomeFireWebhookRequest = {
  clientId?: string;
  secret?: string;
  webhookOverride?: string;
  webhookCode: SandboxBankIncomeWebhookFireRequestWebhookCode;
  webhookFields: SandboxBankIncomeWebhookFireRequestWebhookFields;
};

export const sandboxBankIncomeFireWebhookRequestSchema: Schema<SandboxBankIncomeFireWebhookRequest> =
  s.object<SandboxBankIncomeFireWebhookRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    webhookOverride: s.optional(s.string()),
    webhookCode: sandboxBankIncomeWebhookFireRequestWebhookCodeSchema,
    webhookFields: sandboxBankIncomeWebhookFireRequestWebhookFieldsSchema,
    _keysMap: {
      clientId: "client_id",
      webhookOverride: "webhook_override",
      webhookCode: "webhook_code",
      webhookFields: "webhook_fields",
    },
  });
