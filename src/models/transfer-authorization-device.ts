import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the device being used to initiate the authorization. These fields are not
 * currently incorporated into the risk check.
 */
export type TransferAuthorizationDevice = {
  /** The IP address of the device being used to initiate the authorization. */
  ipAddress?: string;
  /** The user agent of the device being used to initiate the authorization. */
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
