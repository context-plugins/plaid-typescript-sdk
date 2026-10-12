import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * TransactionsRulesRemoveRequest defines the request schema for
 * `/beta/transactions/rules/v1/remove`
 */
export type TransactionsRulesRemoveRequest = {
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
  /** A unique ID representing the end user the rule belongs to. */
  clientUserId: string;
  /** A rule's unique identifier */
  ruleId: string;
};

export const transactionsRulesRemoveRequestSchema: Schema<TransactionsRulesRemoveRequest> =
  s.object<TransactionsRulesRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    clientUserId: s.string(),
    ruleId: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientUserId: "client_user_id",
      ruleId: "rule_id",
    },
  });
