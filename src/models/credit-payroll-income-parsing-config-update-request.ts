import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationDocParsingConfigSchema,
  type IncomeVerificationDocParsingConfig,
} from "./income-verification-doc-parsing-config.js";

/**
 * CreditPayrollIncomeParsingConfigUpdateRequest defines the request schema for
 * `/credit/payroll_income/parsing_config/update`.
 */
export type CreditPayrollIncomeParsingConfigUpdateRequest = {
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
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken: string;
  userId?: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId?: string;
  /** The types of analysis to enable for the document income verification session */
  parsingConfig: IncomeVerificationDocParsingConfig[];
};

export const creditPayrollIncomeParsingConfigUpdateRequestSchema: Schema<CreditPayrollIncomeParsingConfigUpdateRequest> =
  s.object<CreditPayrollIncomeParsingConfigUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    userId: s.optional(s.string()),
    itemId: s.optional(s.string()),
    parsingConfig: s.array(s.lazy(() => incomeVerificationDocParsingConfigSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
      itemId: "item_id",
      parsingConfig: "parsing_config",
    },
  });
