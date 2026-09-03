import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationPrecheckConfidenceSchema,
  type IncomeVerificationPrecheckConfidence,
} from "./income-verification-precheck-confidence.js";

export type CreditPayrollIncomePrecheckResponse = {
  requestId: string;
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
