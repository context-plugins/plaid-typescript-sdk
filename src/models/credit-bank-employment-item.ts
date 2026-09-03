import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankEmploymentSchema, type CreditBankEmployment } from "./credit-bank-employment.js";
import { creditBankIncomeAccountSchema, type CreditBankIncomeAccount } from "./credit-bank-income-account.js";

export type CreditBankEmploymentItem = {
  itemId: string;
  lastUpdatedTime: Date;
  institutionId: string;
  institutionName: string;
  bankEmployments: CreditBankEmployment[];
  bankEmploymentAccounts: CreditBankIncomeAccount[];
};

export const creditBankEmploymentItemSchema: Schema<CreditBankEmploymentItem> =
  s.object<CreditBankEmploymentItem>({
    itemId: s.string(),
    lastUpdatedTime: s.dateTime(),
    institutionId: s.string(),
    institutionName: s.string(),
    bankEmployments: s.array(s.lazy(() => creditBankEmploymentSchema)),
    bankEmploymentAccounts: s.array(s.lazy(() => creditBankIncomeAccountSchema)),
    _keysMap: {
      itemId: "item_id",
      lastUpdatedTime: "last_updated_time",
      institutionId: "institution_id",
      institutionName: "institution_name",
      bankEmployments: "bank_employments",
      bankEmploymentAccounts: "bank_employment_accounts",
    },
  });
