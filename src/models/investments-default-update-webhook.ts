import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type InvestmentsDefaultUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  itemId: string;
  userId?: string;
  error?: Error | null;
  newInvestmentsTransactions: number;
  cancelledInvestmentsTransactions: number;
  environment: WebhookEnvironmentValues;
};

export const investmentsDefaultUpdateWebhookSchema: Schema<InvestmentsDefaultUpdateWebhook> =
  s.object<InvestmentsDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    newInvestmentsTransactions: s.number(),
    cancelledInvestmentsTransactions: s.number(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      newInvestmentsTransactions: "new_investments_transactions",
      cancelledInvestmentsTransactions: "cancelled_investments_transactions",
    },
  });
