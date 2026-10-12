import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkReportRepairableItemSchema,
  type CheckReportRepairableItem,
} from "./check-report-repairable-item.js";
import { errorSchema, type Error } from "./error.js";
import { productsSchema, type Products } from "./products.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when a Check Report has failed to generate. To get more details, call `/user/items/get` and
 * check for non-null `error` objects on the associated Items in the response. These `error` objects
 * will contain more details on why the Item is in an error state and how to resolve it. After
 * resolving the errors, you can try to re-generate the report.
 */
export type CraUserCheckReportFailedWebhook = {
  /** `CHECK_REPORT` */
  webhookType: string;
  /** `USER_CHECK_REPORT_FAILED` */
  webhookCode: string;
  /**
   * The `user_id` associated with the user whose data is being requested. This is received by
   * calling `/user/create`.
   */
  userId: string;
  /** Details on why the Check Report failed and how to resolve it. */
  error?: Error | null;
  /**
   * A list of Items that the end user can repair via Link [update
   * mode](https://plaid.com/docs/link/update-mode). Empty when no Item is user-repairable. After
   * repairing these Items, call `/cra/check_report/create` to regenerate the report.
   */
  repairableItems?: CheckReportRepairableItem[];
  /**
   * Specifies a list of products that failed to generate for the report. Populated when generation
   * was attempted and all requested products failed. Additional detail on what caused the failure
   * can be found by calling the product /get endpoint.
   */
  failedProducts?: Products[];
  /** A list of `item_ids` included in the Check Report. Access to this field is in closed beta. */
  itemIds?: string[] | null;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const craUserCheckReportFailedWebhookSchema: Schema<CraUserCheckReportFailedWebhook> =
  s.object<CraUserCheckReportFailedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    repairableItems: s.optional(s.array(s.lazy(() => checkReportRepairableItemSchema))),
    failedProducts: s.optional(s.array(s.lazy(() => productsSchema))),
    itemIds: s.optionalNullable(s.array(s.string())),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
      repairableItems: "repairable_items",
      failedProducts: "failed_products",
      itemIds: "item_ids",
    },
  });
