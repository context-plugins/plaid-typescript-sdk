import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashflowReportGetRequestOptions = {
  accountIds?: string[];
};

export const cashflowReportGetRequestOptionsSchema: Schema<CashflowReportGetRequestOptions> =
  s.object<CashflowReportGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
