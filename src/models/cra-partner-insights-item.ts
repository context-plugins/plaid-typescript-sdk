import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsItemAccountSchema,
  type CraPartnerInsightsItemAccount,
} from "./cra-partner-insights-item-account.js";

export type CraPartnerInsightsItem = {
  institutionId?: string;
  institutionName?: string;
  itemId?: string;
  accounts?: CraPartnerInsightsItemAccount[];
};

export const craPartnerInsightsItemSchema: Schema<CraPartnerInsightsItem> = s.object<CraPartnerInsightsItem>({
  institutionId: s.optional(s.string()),
  institutionName: s.optional(s.string()),
  itemId: s.optional(s.string()),
  accounts: s.optional(s.array(s.lazy(() => craPartnerInsightsItemAccountSchema))),
  _keysMap: {
    institutionId: "institution_id",
    institutionName: "institution_name",
    itemId: "item_id",
  },
});
