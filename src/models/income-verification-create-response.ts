import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeVerificationCreateResponse = {
  incomeVerificationId: string;
  requestId: string;
};

export const incomeVerificationCreateResponseSchema: Schema<IncomeVerificationCreateResponse> =
  s.object<IncomeVerificationCreateResponse>({
    incomeVerificationId: s.string(),
    requestId: s.string(),
    _keysMap: {
      incomeVerificationId: "income_verification_id",
      requestId: "request_id",
    },
  });
