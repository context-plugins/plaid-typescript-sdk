import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementsAccountSchema, type StatementsAccount } from "./statements-account.js";

export type StatementsListResponse = {
  accounts: StatementsAccount[];
  institutionId: string;
  institutionName: string;
  itemId: string;
  requestId: string;
};

export const statementsListResponseSchema: Schema<StatementsListResponse> = s.object<StatementsListResponse>({
  accounts: s.array(s.lazy(() => statementsAccountSchema)),
  institutionId: s.string(),
  institutionName: s.string(),
  itemId: s.string(),
  requestId: s.string(),
  _keysMap: {
    institutionId: "institution_id",
    institutionName: "institution_name",
    itemId: "item_id",
    requestId: "request_id",
  },
});
