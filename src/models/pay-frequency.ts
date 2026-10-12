import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payFrequencyValueSchema, type PayFrequencyValue } from "./pay-frequency-value.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

/** The frequency of the pay period. */
export type PayFrequency = {
  /** The frequency of the pay period. */
  value: PayFrequencyValue | null;
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

export const payFrequencySchema: Schema<PayFrequency> = s.object<PayFrequency>({
  value: s.nullable(s.lazy(() => payFrequencyValueSchema)),
  verificationStatus: verificationStatusSchema,
  _keysMap: {
    verificationStatus: "verification_status",
  },
});
