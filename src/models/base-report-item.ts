import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportAccountSchema, type BaseReportAccount } from "./base-report-account.js";

export type BaseReportItem = {
  institutionName: string;
  institutionId: string;
  dateLastUpdated: Date;
  itemId: string;
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
