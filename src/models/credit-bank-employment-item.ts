import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditBankEmploymentSchema, type CreditBankEmployment } from "./credit-bank-employment.js";
import { creditBankIncomeAccountSchema, type CreditBankIncomeAccount } from "./credit-bank-income-account.js";

/** The details and metadata for an end user's Item. */
export type CreditBankEmploymentItem = {
  /** The unique identifier for the Item. */
  itemId: string;
  /**
   * The time when this Item's data was last retrieved from the financial institution, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (e.g. "2018-04-12T03:32:11Z").
   */
  lastUpdatedTime: Date;
  /** The unique identifier of the institution associated with the Item. */
  institutionId: string;
  /** The name of the institution associated with the Item. */
  institutionName: string;
  /**
   * The bank employment information for this Item. Each entry in the array is a different employer
   * found.
   */
  bankEmployments: CreditBankEmployment[];
  /** The Item's accounts that have Bank Employment data. */
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
