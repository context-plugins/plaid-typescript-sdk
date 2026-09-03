import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditSessionError = {
  errorType?: string;
  errorCode?: string;
  errorMessage?: string;
  displayMessage?: string | null;
};

export const creditSessionErrorSchema: Schema<CreditSessionError> = s.object<CreditSessionError>({
  errorType: s.optional(s.string()),
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
  displayMessage: s.optionalNullable(s.string()),
  _keysMap: {
    errorType: "error_type",
    errorCode: "error_code",
    errorMessage: "error_message",
    displayMessage: "display_message",
  },
});
