import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Trusted Device data associated with the previous Link session. */
export type TrustedDeviceData = {
  trustLevel?: number;
  /** Device ID associated with the device used during the previous Link session */
  deviceId?: DeviceId;
};

export const trustedDeviceDataSchema: Schema<TrustedDeviceData> = s.object<TrustedDeviceData>({
  trustLevel: s.optional(s.int()),
  deviceId: s.optional(s.lazy(() => deviceIdSchema)),
  _keysMap: {
    trustLevel: "trust_level",
    deviceId: "device_id",
  },
});
