import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craEmploymentRefreshReportAccountSchema,
  type CraEmploymentRefreshReportAccount,
} from "./cra-employment-refresh-report-account.js";

export type CraEmploymentRefreshReportItem = {
  accounts: CraEmploymentRefreshReportAccount[];
  institutionName: string;
  institutionId: string;
  itemId: string;
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
