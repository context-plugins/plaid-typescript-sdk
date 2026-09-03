import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraNetworkInsightsItem = {
  institutionId: string;
  institutionName: string;
  itemId: string;
};

export const craNetworkInsightsItemSchema: Schema<CraNetworkInsightsItem> = s.object<CraNetworkInsightsItem>({
  institutionId: s.string(),
  institutionName: s.string(),
  itemId: s.string(),
  _keysMap: {
    institutionId: "institution_id",
    institutionName: "institution_name",
    itemId: "item_id",
  },
});
