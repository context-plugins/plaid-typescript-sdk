import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatusInvestmentsSchema, type ItemStatusInvestments } from "./item-status-investments.js";
import { itemStatusLastWebhookSchema, type ItemStatusLastWebhook } from "./item-status-last-webhook.js";
import { itemStatusTransactionsSchema, type ItemStatusTransactions } from "./item-status-transactions.js";

export type ItemStatusNullable = {
  investments?: ItemStatusInvestments | null;
  transactions?: ItemStatusTransactions | null;
  lastWebhook?: ItemStatusLastWebhook | null;
};

export const itemStatusNullableSchema: Schema<ItemStatusNullable> = s.object<ItemStatusNullable>({
  investments: s.optionalNullable(s.lazy(() => itemStatusInvestmentsSchema)),
  transactions: s.optionalNullable(s.lazy(() => itemStatusTransactionsSchema)),
  lastWebhook: s.optionalNullable(s.lazy(() => itemStatusLastWebhookSchema)),
  _keysMap: {
    lastWebhook: "last_webhook",
  },
});
