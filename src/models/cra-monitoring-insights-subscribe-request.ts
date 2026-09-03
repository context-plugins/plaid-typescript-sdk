import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeCategorySchema,
  type CreditBankIncomeCategory,
} from "./credit-bank-income-category.js";

export type CraMonitoringInsightsSubscribeRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  itemId?: string;
  webhook: string;
  incomeCategories?: CreditBankIncomeCategory[] | null;
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
