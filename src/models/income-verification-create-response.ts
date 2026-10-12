import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * IncomeVerificationCreateResponse defines the response schema for `/income/verification/create`.
 */
export type IncomeVerificationCreateResponse = {
  /** ID of the verification. This ID is persisted throughout the lifetime of the verification. */
  incomeVerificationId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
