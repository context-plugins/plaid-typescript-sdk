import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionsRuleDetailsSchema, type TransactionsRuleDetails } from "./transactions-rule-details.js";

export type TransactionsRulesCreateRequest = {
  clientId?: string;
  secret?: string;
  clientUserId: string;
  pfcPrimaryCategory: string;
  pfcDetailedCategory: string;
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
