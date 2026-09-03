import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationPrecheckConfidenceSchema,
  type IncomeVerificationPrecheckConfidence,
} from "./income-verification-precheck-confidence.js";

export type IncomeVerificationPrecheckResponse = {
  precheckId: string;
  requestId: string;
  confidence: IncomeVerificationPrecheckConfidence;
};

export const incomeVerificationPrecheckResponseSchema: Schema<IncomeVerificationPrecheckResponse> =
  s.object<IncomeVerificationPrecheckResponse>({
    precheckId: s.string(),
    requestId: s.string(),
    confidence: incomeVerificationPrecheckConfidenceSchema,
    _keysMap: {
      precheckId: "precheck_id",
      requestId: "request_id",
    },
  });
