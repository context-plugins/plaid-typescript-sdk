import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type TrustedDeviceData = {
  trustLevel?: number;
  deviceId?: DeviceId;
};

export const trustedDeviceDataSchema: Schema<TrustedDeviceData> = s.object<TrustedDeviceData>({
  trustLevel: s.optional(s.number()),
  deviceId: s.optional(s.lazy(() => deviceIdSchema)),
  _keysMap: {
    trustLevel: "trust_level",
    deviceId: "device_id",
  },
});
