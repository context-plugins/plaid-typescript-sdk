import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeAccountSchema,
  type CraVerificationIncomeAccount,
} from "./cra-verification-income-account.js";

/** The details and metadata for an end user's Item within the Home Lending Income Report. */
export type CraVerificationIncomeItem = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Item's accounts that have bank income data. */
  accounts: CraVerificationIncomeAccount[];
  /** The time when this Item's data was last retrieved from the financial institution. */
  lastUpdatedTime: Date;
  /** The unique identifier of the institution associated with the Item. */
  institutionId: string;
  /** The name of the institution associated with the Item. */
  institutionName: string;
};

export const craVerificationIncomeItemSchema: Schema<CraVerificationIncomeItem> =
  s.object<CraVerificationIncomeItem>({
    itemId: s.string(),
    accounts: s.array(s.lazy(() => craVerificationIncomeAccountSchema)),
    lastUpdatedTime: s.dateTime(),
    institutionId: s.string(),
    institutionName: s.string(),
    _keysMap: {
      itemId: "item_id",
      lastUpdatedTime: "last_updated_time",
      institutionId: "institution_id",
      institutionName: "institution_name",
    },
  });
