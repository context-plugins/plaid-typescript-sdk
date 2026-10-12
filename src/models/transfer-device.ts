import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the device being used to initiate the authorization. */
export type TransferDevice = {
  /** The IP address of the device being used to initiate the authorization. */
  ipAddress: string;
  /** The user agent of the device being used to initiate the authorization. */
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
