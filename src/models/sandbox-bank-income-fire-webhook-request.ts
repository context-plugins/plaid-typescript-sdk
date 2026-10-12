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

/**
 * SandboxBankIncomeFireWebhookRequest defines the request schema for
 * `/sandbox/bank_income/fire_webhook`
 */
export type SandboxBankIncomeFireWebhookRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The URL to which the webhook should be sent. If provided, this will override the URL set in the
   * dashboard.
   */
  webhookOverride?: string;
  /** The webhook codes this endpoint can be used to test */
  webhookCode: SandboxBankIncomeWebhookFireRequestWebhookCode;
  /** Optional fields which will be populated in the simulated webhook */
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
