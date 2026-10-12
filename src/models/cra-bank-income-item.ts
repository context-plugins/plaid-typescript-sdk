import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeAccountSchema, type CraBankIncomeAccount } from "./cra-bank-income-account.js";
import { craBankIncomeSourceSchema, type CraBankIncomeSource } from "./cra-bank-income-source.js";

/** The details and metadata for an end user's Item. */
export type CraBankIncomeItem = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId?: string;
  /** The Item's accounts that have bank income data. */
  accounts?: CraBankIncomeAccount[];
  /**
   * This is a V1 (II1) field. For the V2 (II2) equivalent, use the `accounts` field. The Item's
   * accounts that have bank income data.
   */
  bankIncomeAccounts: CraBankIncomeAccount[];
  /**
   * This is a V1 (II1) field. For the V2 (II2) equivalent, use the report-level `income_streams`
   * field. The income sources for this Item. Each entry in the array is a single income source.
   */
  bankIncomeSources: CraBankIncomeSource[];
  /** The time when this Item's data was last retrieved from the financial institution. */
  lastUpdatedTime?: Date;
  /** The unique identifier of the institution associated with the Item. */
  institutionId?: string;
  /** The name of the institution associated with the Item. */
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
