import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeAccountSchema, type CraBankIncomeAccount } from "./cra-bank-income-account.js";
import { craBankIncomeSourceSchema, type CraBankIncomeSource } from "./cra-bank-income-source.js";

export type CraBankIncomeItem = {
  itemId?: string;
  accounts?: CraBankIncomeAccount[];
  bankIncomeAccounts: CraBankIncomeAccount[];
  bankIncomeSources: CraBankIncomeSource[];
  lastUpdatedTime?: Date;
  institutionId?: string;
  institutionName?: string;
};

export const craBankIncomeItemSchema: Schema<CraBankIncomeItem> = s.object<CraBankIncomeItem>({
  itemId: s.optional(s.string()),
  accounts: s.optional(s.array(s.lazy(() => craBankIncomeAccountSchema))),
  bankIncomeAccounts: s.array(s.lazy(() => craBankIncomeAccountSchema)),
  bankIncomeSources: s.array(s.lazy(() => craBankIncomeSourceSchema)),
  lastUpdatedTime: s.optional(s.dateTime()),
  institutionId: s.optional(s.string()),
  institutionName: s.optional(s.string()),
  _keysMap: {
    itemId: "item_id",
    bankIncomeAccounts: "bank_income_accounts",
    bankIncomeSources: "bank_income_sources",
    lastUpdatedTime: "last_updated_time",
    institutionId: "institution_id",
    institutionName: "institution_name",
  },
});
