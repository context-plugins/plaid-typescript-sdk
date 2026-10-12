import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * This webhook is only sent to [Plaid processor
 * partners](https://plaid.com/docs/auth/partnerships/).
 *
 * Fired when a processor updates the webhook URL for a processor token via
 * `/processor/token/webhook/update`.
 */
export type ProcessorTokenWebhookUpdate = {
  /** `PROCESSOR_TOKEN` */
  webhookType: string;
  /** `WEBHOOK_UPDATE_ACKNOWLEDGED` */
  webhookCode: string;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error?: Error | null;
  /** The ID of the account. */
  accountId: string;
  /** The new webhook URL. */
  newWebhookUrl: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const processorTokenWebhookUpdateSchema: Schema<ProcessorTokenWebhookUpdate> =
  s.object<ProcessorTokenWebhookUpdate>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    accountId: s.string(),
    newWebhookUrl: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
      newWebhookUrl: "new_webhook_url",
    },
  });
