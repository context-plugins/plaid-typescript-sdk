import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationDocParsingConfigSchema,
  type IncomeVerificationDocParsingConfig,
} from "./income-verification-doc-parsing-config.js";

export type CreditPayrollIncomeParsingConfigUpdateRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
  userId?: string;
  itemId?: string;
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
