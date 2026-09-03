import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountAssetsSchema, type AccountAssets } from "./account-assets.js";

export type AssetReportItem = {
  itemId: string;
  institutionName: string;
  institutionId: string;
  dateLastUpdated: Date;
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
