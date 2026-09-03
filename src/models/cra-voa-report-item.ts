import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craVoaReportAccountSchema, type CraVoaReportAccount } from "./cra-voa-report-account.js";

export type CraVoaReportItem = {
  accounts: CraVoaReportAccount[];
  institutionName: string;
  institutionId: string;
  itemId: string;
  lastUpdateTime: Date;
};

export const craVoaReportItemSchema: Schema<CraVoaReportItem> = s.object<CraVoaReportItem>({
  accounts: s.array(s.lazy(() => craVoaReportAccountSchema)),
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
