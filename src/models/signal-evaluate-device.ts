import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Details about the end user's device. These fields are optional, but strongly recommended to
 * increase the accuracy of results when using Signal Transaction Scores. When using a Balance-only
 * Ruleset, these fields are ignored if the Signal Addendum has been signed; if it has not been
 * signed, using these fields will result in an error.
 */
export type SignalEvaluateDevice = {
  /** The IP address of the device that initiated the transaction */
  ipAddress?: string | null;
  /** The user agent of the device that initiated the transaction (e.g. "Mozilla/5.0") */
  userAgent?: string | null;
};

export const signalEvaluateDeviceSchema: Schema<SignalEvaluateDevice> = s.object<SignalEvaluateDevice>({
  ipAddress: s.optionalNullable(s.string()),
  userAgent: s.optionalNullable(s.string()),
  _keysMap: {
    ipAddress: "ip_address",
    userAgent: "user_agent",
  },
});
