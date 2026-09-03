import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferIntentGetFailureReason = {
  errorType?: string;
  errorCode?: string;
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
