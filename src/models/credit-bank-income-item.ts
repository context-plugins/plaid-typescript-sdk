import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankIncomeAccountSchema, type CreditBankIncomeAccount } from "./credit-bank-income-account.js";
import { creditBankIncomeSourceSchema, type CreditBankIncomeSource } from "./credit-bank-income-source.js";

/** The details and metadata for an end user's Item. */
export type CreditBankIncomeItem = {
  /** The Item's accounts that have Bank Income data. */
  bankIncomeAccounts?: CreditBankIncomeAccount[];
  /** The income sources for this Item. Each entry in the array is a single income source. */
  bankIncomeSources?: CreditBankIncomeSource[];
  /** The time when this Item's data was last retrieved from the financial institution. */
  lastUpdatedTime?: Date;
  /** The unique identifier of the institution associated with the Item. */
  institutionId?: string;
  /** The name of the institution associated with the Item. */
  institutionName?: string;
  /** The unique identifier for the Item. */
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
