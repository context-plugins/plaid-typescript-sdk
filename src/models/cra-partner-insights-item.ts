import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsItemAccountSchema,
  type CraPartnerInsightsItemAccount,
} from "./cra-partner-insights-item-account.js";

/** The details and metadata for an end user's Item. */
export type CraPartnerInsightsItem = {
  /** The ID for the institution that the user linked. */
  institutionId?: string;
  /** The name of the institution the user linked. */
  institutionName?: string;
  /** The identifier for the Item. */
  itemId?: string;
  /** A list of accounts in the Item. */
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
