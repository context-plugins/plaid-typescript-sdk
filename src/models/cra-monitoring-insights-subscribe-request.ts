import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeCategorySchema,
  type CreditBankIncomeCategory,
} from "./credit-bank-income-category.js";

/**
 * CraMonitoringInsightsSubscribeRequest defines the request schema for
 * `/cra/monitoring_insights/subscribe`
 */
export type CraMonitoringInsightsSubscribeRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
  /** The Item ID to subscribe for Cash Flow Updates. */
  itemId?: string;
  /**
   * URL to which Plaid will send Cash Flow Updates webhooks, for example when the requested Cash
   * Flow Updates report is ready.
   */
  webhook: string;
  /**
   * Income categories to include in Cash Flow Updates. If empty or `null`, this field will default
   * to including all possible categories.
   */
  incomeCategories?: CreditBankIncomeCategory[] | null;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
};

export const craMonitoringInsightsSubscribeRequestSchema: Schema<CraMonitoringInsightsSubscribeRequest> =
  s.object<CraMonitoringInsightsSubscribeRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    itemId: s.optional(s.string()),
    webhook: s.string(),
    incomeCategories: s.optionalNullable(s.array(s.lazy(() => creditBankIncomeCategorySchema))),
    userToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      itemId: "item_id",
      incomeCategories: "income_categories",
      userToken: "user_token",
    },
  });
