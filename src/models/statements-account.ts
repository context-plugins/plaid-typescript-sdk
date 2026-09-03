import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementsStatementSchema, type StatementsStatement } from "./statements-statement.js";

export type StatementsAccount = {
  accountId: string;
  accountMask: string;
  accountName: string;
  accountOfficialName: string;
  accountSubtype: string;
  accountType: string;
  statements: StatementsStatement[];
};

export const statementsAccountSchema: Schema<StatementsAccount> = s.object<StatementsAccount>({
  accountId: s.string(),
  accountMask: s.string(),
  accountName: s.string(),
  accountOfficialName: s.string(),
  accountSubtype: s.string(),
  accountType: s.string(),
  statements: s.array(s.lazy(() => statementsStatementSchema)),
  _keysMap: {
    accountId: "account_id",
    accountMask: "account_mask",
    accountName: "account_name",
    accountOfficialName: "account_official_name",
    accountSubtype: "account_subtype",
    accountType: "account_type",
  },
});
