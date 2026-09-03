import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  craEmploymentRefreshReportTransactionSchema,
  type CraEmploymentRefreshReportTransaction,
} from "./cra-employment-refresh-report-transaction.js";

export type CraEmploymentRefreshReportAccount = {
  accountId: string;
  name: string;
  officialName: string | null;
  type: AccountType;
  subtype: AccountSubtype | null;
  transactions: CraEmploymentRefreshReportTransaction[];
};

export const craEmploymentRefreshReportAccountSchema: Schema<CraEmploymentRefreshReportAccount> =
  s.object<CraEmploymentRefreshReportAccount>({
    accountId: s.string(),
    name: s.string(),
    officialName: s.nullable(s.string()),
    type: accountTypeSchema,
    subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
    transactions: s.array(s.lazy(() => craEmploymentRefreshReportTransactionSchema)),
    _keysMap: {
      accountId: "account_id",
      officialName: "official_name",
    },
  });
