import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains data about the connected Item. */
export type CraNetworkInsightsItem = {
  /** The ID for the institution the user linked. */
  institutionId: string;
  /** The name of the institution the user linked. */
  institutionName: string;
  /** The identifier for the Item. */
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
