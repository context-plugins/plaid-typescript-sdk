import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionsRuleDetailsSchema, type TransactionsRuleDetails } from "./transactions-rule-details.js";

/**
 * TransactionsRulesCreateRequest defines the request schema for
 * `/beta/transactions/rules/v1/create`
 */
export type TransactionsRulesCreateRequest = {
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
   * A unique ID representing the end user. This ID is used to associate rules with a specific user.
   */
  clientUserId: string;
  /**
   * A personal finance primary category. See the [taxonomy csv
   * file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list of personal finance
   * categories.
   */
  pfcPrimaryCategory: string;
  /**
   * A personal finance detailed category. See the [taxonomy csv
   * file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list of personal finance
   * categories.
   */
  pfcDetailedCategory: string;
  /** A representation of transactions rule details. */
  ruleDetails: TransactionsRuleDetails;
};

export const transactionsRulesCreateRequestSchema: Schema<TransactionsRulesCreateRequest> =
  s.object<TransactionsRulesCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    clientUserId: s.string(),
    pfcPrimaryCategory: s.string(),
    pfcDetailedCategory: s.string(),
    ruleDetails: transactionsRuleDetailsSchema,
    _keysMap: {
      clientId: "client_id",
      clientUserId: "client_user_id",
      pfcPrimaryCategory: "pfc_primary_category",
      pfcDetailedCategory: "pfc_detailed_category",
      ruleDetails: "rule_details",
    },
  });
