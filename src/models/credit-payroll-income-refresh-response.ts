import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditPayrollIncomeRefreshResponse defines the response schema for
 * `/credit/payroll_income/refresh`
 */
export type CreditPayrollIncomeRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * The verification refresh status. One of the following:
   *
   * `"USER_PRESENCE_REQUIRED"` User presence is required to refresh an income verification.
   * `"SUCCESSFUL"` The income verification refresh was successful. `"NOT_FOUND"` No new data was
   * found after the income verification refresh.
   */
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
