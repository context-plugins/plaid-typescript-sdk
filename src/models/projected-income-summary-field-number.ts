import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

/** The employee's estimated annual salary, as derived from information reported on the paystub. */
export type ProjectedIncomeSummaryFieldNumber = {
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

export const projectedIncomeSummaryFieldNumberSchema: Schema<ProjectedIncomeSummaryFieldNumber> =
  s.object<ProjectedIncomeSummaryFieldNumber>({
    value: s.float64(),
    verificationStatus: verificationStatusSchema,
    _keysMap: {
      verificationStatus: "verification_status",
    },
  });
