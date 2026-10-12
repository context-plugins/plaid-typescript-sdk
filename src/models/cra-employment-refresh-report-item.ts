import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craEmploymentRefreshReportAccountSchema,
  type CraEmploymentRefreshReportAccount,
} from "./cra-employment-refresh-report-account.js";

/** A representation of an Item within an Employment Refresh Report. */
export type CraEmploymentRefreshReportItem = {
  /** Data about each of the accounts open on the Item. */
  accounts: CraEmploymentRefreshReportAccount[];
  /** The full financial institution name associated with the Item. */
  institutionName: string;
  /** The id of the financial institution associated with the Item. */
  institutionId: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /**
   * The date and time when this Item's data was last retrieved from the financial institution, in
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  lastUpdateTime: Date;
};

export const craEmploymentRefreshReportItemSchema: Schema<CraEmploymentRefreshReportItem> =
  s.object<CraEmploymentRefreshReportItem>({
    accounts: s.array(s.lazy(() => craEmploymentRefreshReportAccountSchema)),
    institutionName: s.string(),
    institutionId: s.string(),
    itemId: s.string(),
    lastUpdateTime: s.dateTime(),
    _keysMap: {
      institutionName: "institution_name",
      institutionId: "institution_id",
      itemId: "item_id",
      lastUpdateTime: "last_update_time",
    },
  });
