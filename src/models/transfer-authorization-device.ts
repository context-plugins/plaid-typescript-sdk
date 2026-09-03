import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferAuthorizationDevice = {
  ipAddress?: string;
  userAgent?: string;
};

export const transferAuthorizationDeviceSchema: Schema<TransferAuthorizationDevice> =
  s.object<TransferAuthorizationDevice>({
    ipAddress: s.optional(s.string()),
    userAgent: s.optional(s.string()),
    _keysMap: {
      ipAddress: "ip_address",
      userAgent: "user_agent",
    },
  });
