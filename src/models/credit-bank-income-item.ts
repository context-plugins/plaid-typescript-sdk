import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeAccountSchema, type CreditBankIncomeAccount } from "./credit-bank-income-account.js";
import { creditBankIncomeSourceSchema, type CreditBankIncomeSource } from "./credit-bank-income-source.js";

export type CreditBankIncomeItem = {
  bankIncomeAccounts?: CreditBankIncomeAccount[];
  bankIncomeSources?: CreditBankIncomeSource[];
  lastUpdatedTime?: Date;
  institutionId?: string;
  institutionName?: string;
  itemId?: string;
};

export const creditBankIncomeItemSchema: Schema<CreditBankIncomeItem> = s.object<CreditBankIncomeItem>({
  bankIncomeAccounts: s.optional(s.array(s.lazy(() => creditBankIncomeAccountSchema))),
  bankIncomeSources: s.optional(s.array(s.lazy(() => creditBankIncomeSourceSchema))),
  lastUpdatedTime: s.optional(s.dateTime()),
  institutionId: s.optional(s.string()),
  institutionName: s.optional(s.string()),
  itemId: s.optional(s.string()),
  _keysMap: {
    bankIncomeAccounts: "bank_income_accounts",
    bankIncomeSources: "bank_income_sources",
    lastUpdatedTime: "last_updated_time",
    institutionId: "institution_id",
    institutionName: "institution_name",
    itemId: "item_id",
  },
});
