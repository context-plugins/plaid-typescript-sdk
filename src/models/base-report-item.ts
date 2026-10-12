import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportAccountSchema, type BaseReportAccount } from "./base-report-account.js";

/** A representation of an Item within a Base Report. */
export type BaseReportItem = {
  /** The full financial institution name associated with the Item. */
  institutionName: string;
  /** The id of the financial institution associated with the Item. */
  institutionId: string;
  /**
   * The date and time when this Item's data was last retrieved from the financial institution, in
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  dateLastUpdated: Date;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** Data about each of the accounts open on the Item. */
  accounts: BaseReportAccount[];
};

export const baseReportItemSchema: Schema<BaseReportItem> = s.object<BaseReportItem>({
  institutionName: s.string(),
  institutionId: s.string(),
  dateLastUpdated: s.dateTime(),
  itemId: s.string(),
  accounts: s.array(s.lazy(() => baseReportAccountSchema)),
  _keysMap: {
    institutionName: "institution_name",
    institutionId: "institution_id",
    dateLastUpdated: "date_last_updated",
    itemId: "item_id",
  },
});
