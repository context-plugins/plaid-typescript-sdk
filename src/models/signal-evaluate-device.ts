import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalEvaluateDevice = {
  ipAddress?: string | null;
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
