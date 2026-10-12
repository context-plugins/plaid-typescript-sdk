import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  statementsRefreshCompleteResultSchema,
  type StatementsRefreshCompleteResult,
} from "./statements-refresh-complete-result.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when refreshed statements extraction is completed or failed to be completed. Triggered by
 * calling `/statements/refresh`.
 */
export type StatementsRefreshCompleteWebhook = {
  /** `STATEMENTS` */
  webhookType: string;
  /** `STATEMENTS_REFRESH_COMPLETE` */
  webhookCode: string;
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId: string;
  /**
   * The result of the statement refresh extraction
   *
   * `SUCCESS`: The statements were successfully extracted and can be listed via `/statements/list`
   * and downloaded via `/statements/download`.
   *
   * `FAILURE`: The statements failed to be extracted.
   */
  result: StatementsRefreshCompleteResult;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const statementsRefreshCompleteWebhookSchema: Schema<StatementsRefreshCompleteWebhook> =
  s.object<StatementsRefreshCompleteWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    result: statementsRefreshCompleteResultSchema,
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
    },
  });
