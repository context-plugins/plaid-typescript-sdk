import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

/**
 * Year-to-date earnings after any tax withholdings, benefit payments or deductions, as reported on
 * the paystub.
 */
export type YtdNetIncomeSummaryFieldNumber = {
  /** The value of the field. */
  value: number;
  /**
   * The verification status. One of the following:
   *
   * `"VERIFIED"`: The information was successfully verified.
   *
   * `"UNVERIFIED"`: The verification has not yet been performed.
   *
   * `"NEEDS_INFO"`: The verification was attempted but could not be completed due to missing
   * information.
   *
   * "`UNABLE_TO_VERIFY`": The verification was performed and the information could not be verified.
   *
   * `"UNKNOWN"`: The verification status is unknown.
   */
  verificationStatus: VerificationStatus;
};

export const ytdNetIncomeSummaryFieldNumberSchema: Schema<YtdNetIncomeSummaryFieldNumber> =
  s.object<YtdNetIncomeSummaryFieldNumber>({
    value: s.float64(),
    verificationStatus: verificationStatusSchema,
    _keysMap: {
      verificationStatus: "verification_status",
    },
  });
