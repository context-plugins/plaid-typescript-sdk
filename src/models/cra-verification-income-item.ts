import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeAccountSchema,
  type CraVerificationIncomeAccount,
} from "./cra-verification-income-account.js";

export type CraVerificationIncomeItem = {
  itemId: string;
  accounts: CraVerificationIncomeAccount[];
  lastUpdatedTime: Date;
  institutionId: string;
  institutionName: string;
};

export const craVerificationIncomeItemSchema: Schema<CraVerificationIncomeItem> =
  s.object<CraVerificationIncomeItem>({
    itemId: s.string(),
    accounts: s.array(s.lazy(() => craVerificationIncomeAccountSchema)),
    lastUpdatedTime: s.dateTime(),
    institutionId: s.string(),
    institutionName: s.string(),
    _keysMap: {
      itemId: "item_id",
      lastUpdatedTime: "last_updated_time",
      institutionId: "institution_id",
      institutionName: "institution_name",
    },
  });
