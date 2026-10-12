import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when the Check Report is ready to be retrieved. Once this webhook has fired, the report
 * will be available to retrieve for 24 hours.
 */
export type CraCheckReportReadyWebhook = {
  /** `CHECK_REPORT` */
  webhookType: string;
  /** `CHECK_REPORT_READY` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /** Specifies a list of products that have successfully been generated for the report. */
  successfulProducts?: Products[] | null;
  /**
   * Specifies a list of products that have failed to generate for the report. Additional detail on
   * what caused the failure can be found by calling the product /get endpoint.
   */
  failedProducts?: Products[] | null;
  /** A list of `item_ids` included in the Check Report. Access to this field is in closed beta. */
  itemIds?: string[] | null;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const craCheckReportReadyWebhookSchema: Schema<CraCheckReportReadyWebhook> =
  s.object<CraCheckReportReadyWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    successfulProducts: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
    failedProducts: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
    itemIds: s.optionalNullable(s.array(s.string())),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
      successfulProducts: "successful_products",
      failedProducts: "failed_products",
      itemIds: "item_ids",
    },
  });
