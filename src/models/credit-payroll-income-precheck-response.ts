import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationPrecheckConfidenceSchema,
  type IncomeVerificationPrecheckConfidence,
} from "./income-verification-precheck-confidence.js";

/** Defines the response schema for `/credit/payroll_income/precheck`. */
export type CreditPayrollIncomePrecheckResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * The confidence that Plaid can support the user in the digital income verification flow instead
   * of requiring a manual paystub upload. One of the following:
   *
   * `"HIGH"`: It is very likely that this user can use the digital income verification flow.
   *
   * "`LOW`": It is unlikely that this user can use the digital income verification flow.
   *
   * `"UNKNOWN"`: It was not possible to determine if the user is supportable with the information
   * passed.
   */
  confidence: IncomeVerificationPrecheckConfidence;
};

export const creditPayrollIncomePrecheckResponseSchema: Schema<CreditPayrollIncomePrecheckResponse> =
  s.object<CreditPayrollIncomePrecheckResponse>({
    requestId: s.string(),
    confidence: incomeVerificationPrecheckConfidenceSchema,
    _keysMap: {
      requestId: "request_id",
    },
  });
