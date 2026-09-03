import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferDevice = {
  ipAddress: string;
  userAgent: string;
};

export const transferDeviceSchema: Schema<TransferDevice> = s.object<TransferDevice>({
  ipAddress: s.string(),
  userAgent: s.string(),
  _keysMap: {
    ipAddress: "ip_address",
    userAgent: "user_agent",
  },
});
