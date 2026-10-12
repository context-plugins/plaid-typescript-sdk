import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The failure reason if the status for a refund is `"failed"` or `"returned"`. Null value
 * otherwise.
 */
export type TransferRefundFailure = {
  /**
   * The failure code, e.g. `R01`. A failure code will be provided if and only if the refund status
   * is `returned`. See [ACH return codes](https://plaid.com/docs/errors/transfer/#ach-return-codes)
   * for a full listing of ACH return codes and [RTP/RfP error
   * codes](https://plaid.com/docs/errors/transfer/#rtprfp-error-codes) for RTP error codes.
   */
  failureCode?: string | null;
  /**
   * The ACH return code, e.g. `R01`. A return code will be provided if and only if the refund
   * status is `returned`. For a full listing of ACH return codes, see [Transfer
   * errors](https://plaid.com/docs/errors/transfer/#ach-return-codes). This field is deprecated in
   * favor of the more versatile `failure_code`, which encompasses non-ACH failure codes as well.
   *
   * @deprecated
   */
  achReturnCode?: string | null;
  /** A human-readable description of the reason for the failure or reversal. */
  description?: string;
};

export const transferRefundFailureSchema: Schema<TransferRefundFailure> = s.object<TransferRefundFailure>({
  failureCode: s.optionalNullable(s.string()),
  achReturnCode: s.optionalNullable(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    failureCode: "failure_code",
    achReturnCode: "ach_return_code",
  },
});
