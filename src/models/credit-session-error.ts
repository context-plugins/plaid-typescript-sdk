import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of a Link error. */
export type CreditSessionError = {
  /** A broad categorization of the error. */
  errorType?: string;
  /** The particular error code. */
  errorCode?: string;
  /** A developer-friendly representation of the error code. */
  errorMessage?: string;
  /**
   * A user-friendly representation of the error code. `null` if the error is not related to user
   * action.
   */
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
