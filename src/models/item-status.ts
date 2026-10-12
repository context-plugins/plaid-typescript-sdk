import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatusInvestmentsSchema, type ItemStatusInvestments } from "./item-status-investments.js";
import { itemStatusLastWebhookSchema, type ItemStatusLastWebhook } from "./item-status-last-webhook.js";
import { itemStatusTransactionsSchema, type ItemStatusTransactions } from "./item-status-transactions.js";

/** An object with information about the status of the Item. */
export type ItemStatus = {
  /** Information about the last successful and failed investments update for the Item. */
  investments?: ItemStatusInvestments | null;
  /** Information about the last successful and failed transactions update for the Item. */
  transactions?: ItemStatusTransactions | null;
  /** Information about the last webhook fired for the Item. */
  lastWebhook?: ItemStatusLastWebhook | null;
};

export const itemStatusSchema: Schema<ItemStatus> = s.object<ItemStatus>({
  investments: s.optionalNullable(s.lazy(() => itemStatusInvestmentsSchema)),
  transactions: s.optionalNullable(s.lazy(() => itemStatusTransactionsSchema)),
  lastWebhook: s.optionalNullable(s.lazy(() => itemStatusLastWebhookSchema)),
  _keysMap: {
    lastWebhook: "last_webhook",
  },
});
