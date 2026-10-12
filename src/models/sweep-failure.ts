import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The failure reason if the status for a sweep is `"failed"` or `"returned"`. Null value otherwise.
 */
export type SweepFailure = {
  /**
   * The failure code, e.g. `R01`. A failure code will be provided if and only if the sweep status
   * is `returned`. See [ACH return codes](https://plaid.com/docs/errors/transfer/#ach-return-codes)
   * for a full listing of ACH return codes and [RTP/RfP error
   * codes](https://plaid.com/docs/errors/transfer/#rtprfp-error-codes) for RTP error codes.
   */
  failureCode?: string | null;
  /** A human-readable description of the reason for the failure or reversal. */
  description?: string | null;
};

export const sweepFailureSchema: Schema<SweepFailure> = s.object<SweepFailure>({
  failureCode: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  _keysMap: {
    failureCode: "failure_code",
  },
});
