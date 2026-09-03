import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type IncomeVerificationStatusWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  verificationStatus: string;
  environment: WebhookEnvironmentValues;
};

export const incomeVerificationStatusWebhookSchema: Schema<IncomeVerificationStatusWebhook> =
  s.object<IncomeVerificationStatusWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    verificationStatus: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      verificationStatus: "verification_status",
    },
  });
