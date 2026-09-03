import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankIncomeWebhookUpdateRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
  userId?: string;
  enableWebhooks: boolean;
};

export const creditBankIncomeWebhookUpdateRequestSchema: Schema<CreditBankIncomeWebhookUpdateRequest> =
  s.object<CreditBankIncomeWebhookUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    userId: s.optional(s.string()),
    enableWebhooks: s.boolean(),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
      enableWebhooks: "enable_webhooks",
    },
  });
