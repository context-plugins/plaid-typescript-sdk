import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionBankIncomeStatusSchema,
  type CreditSessionBankIncomeStatus,
} from "./credit-session-bank-income-status.js";

export type CreditSessionBankIncomeResult = {
  status?: CreditSessionBankIncomeStatus;
  itemId?: string;
  institutionId?: string;
};

export const creditSessionBankIncomeResultSchema: Schema<CreditSessionBankIncomeResult> =
  s.object<CreditSessionBankIncomeResult>({
    status: s.optional(s.lazy(() => creditSessionBankIncomeStatusSchema)),
    itemId: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      itemId: "item_id",
      institutionId: "institution_id",
    },
  });
