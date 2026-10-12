import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The webhook types that can be fired by this test endpoint. */
export const WebhookType = {
  Auth: "AUTH",
  Holdings: "HOLDINGS",
  InvestmentsTransactions: "INVESTMENTS_TRANSACTIONS",
  Item: "ITEM",
  Liabilities: "LIABILITIES",
  Transactions: "TRANSACTIONS",
  Assets: "ASSETS",
} as const;
export type WebhookType = (typeof WebhookType)[keyof typeof WebhookType] | (string & {});

export const webhookTypeSchema: EnumSchema<WebhookType> = s.enumOf<WebhookType>(WebhookType);
