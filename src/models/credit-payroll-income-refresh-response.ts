import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditPayrollIncomeRefreshResponse = {
  requestId: string;
  verificationRefreshStatus: string;
};

export const creditPayrollIncomeRefreshResponseSchema: Schema<CreditPayrollIncomeRefreshResponse> =
  s.object<CreditPayrollIncomeRefreshResponse>({
    requestId: s.string(),
    verificationRefreshStatus: s.string(),
    _keysMap: {
      requestId: "request_id",
      verificationRefreshStatus: "verification_refresh_status",
    },
  });
