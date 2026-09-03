import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankIncomeRefreshResponse = {
  requestId: string;
};

export const creditBankIncomeRefreshResponseSchema: Schema<CreditBankIncomeRefreshResponse> =
  s.object<CreditBankIncomeRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
