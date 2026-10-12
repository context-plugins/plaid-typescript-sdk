import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountAssetsSchema, type AccountAssets } from "./account-assets.js";

/** A representation of an Item within an Asset Report. */
export type AssetReportItem = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The full financial institution name associated with the Item. */
  institutionName: string;
  /** The id of the financial institution associated with the Item. */
  institutionId: string;
  /**
   * The date and time when this Item's data was last retrieved from the financial institution, in
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  dateLastUpdated: Date;
  /** Data about each of the accounts open on the Item. */
  accounts: AccountAssets[];
};

export const assetReportItemSchema: Schema<AssetReportItem> = s.object<AssetReportItem>({
  itemId: s.string(),
  institutionName: s.string(),
  institutionId: s.string(),
  dateLastUpdated: s.dateTime(),
  accounts: s.array(s.lazy(() => accountAssetsSchema)),
  _keysMap: {
    itemId: "item_id",
    institutionName: "institution_name",
    institutionId: "institution_id",
    dateLastUpdated: "date_last_updated",
  },
});
