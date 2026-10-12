import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Conveys information about the errors causing missing or stale bank data used to construct the
 * `/signal/evaluate` scores and response
 */
export type SignalWarning = {
  /** A broad categorization of the warning. Safe for programmatic use. */
  warningType?: string;
  /**
   * The warning code identifies a specific kind of warning that pertains to the error causing bank
   * data to be missing. Safe for programmatic use. For more details on warning codes, please refer
   * to Plaid standard error codes documentation. If you receive the `ITEM_LOGIN_REQUIRED` warning,
   * we recommend re-authenticating your user by implementing Link's update mode. This will guide
   * your user to fix their credentials, allowing Plaid to start fetching data again for future
   * requests.
   */
  warningCode?: string;
  /**
   * A developer-friendly representation of the warning type. This may change over time and is not
   * safe for programmatic use.
   */
  warningMessage?: string;
};

export const signalWarningSchema: Schema<SignalWarning> = s.object<SignalWarning>({
  warningType: s.optional(s.string()),
  warningCode: s.optional(s.string()),
  warningMessage: s.optional(s.string()),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
    warningMessage: "warning_message",
  },
});
