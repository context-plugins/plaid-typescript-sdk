import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The reason for a failed transfer intent. Returned only if the transfer intent status is `failed`.
 * Null otherwise.
 */
export type TransferIntentGetFailureReason = {
  /** A broad categorization of the error. */
  errorType?: string;
  /**
   * A code representing the reason for a failed transfer intent (i.e., an API error or the
   * authorization being declined).
   */
  errorCode?: string;
  /** A human-readable description of the code associated with a failed transfer intent. */
  errorMessage?: string;
};

export const transferIntentGetFailureReasonSchema: Schema<TransferIntentGetFailureReason> =
  s.object<TransferIntentGetFailureReason>({
    errorType: s.optional(s.string()),
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
    _keysMap: {
      errorType: "error_type",
      errorCode: "error_code",
      errorMessage: "error_message",
    },
  });
