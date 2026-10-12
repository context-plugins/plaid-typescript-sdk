import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device ID associated with the device used during the previous Link session */
export type DeviceId = {
  type?: number;
  /** Identifier for the device */
  id?: string;
};

export const deviceIdSchema: Schema<DeviceId> = s.object<DeviceId>({
  type: s.optional(s.int()),
  id: s.optional(s.string()),
});
