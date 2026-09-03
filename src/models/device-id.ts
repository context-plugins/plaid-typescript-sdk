import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceId = {
  type?: number;
  id?: string;
};

export const deviceIdSchema: Schema<DeviceId> = s.object<DeviceId>({
  type: s.optional(s.number()),
  id: s.optional(s.string()),
});
