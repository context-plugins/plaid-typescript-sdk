import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectComputeSubscoresSchema, type ProtectComputeSubscores } from "./protect-compute-subscores.js";

export type ProtectComputeResponse = {
  score?: number | null;
  model?: string;
  attributes?: Record<string, unknown> | null;
  subscores?: ProtectComputeSubscores | null;
  timestamp?: Date | null;
  requestId: string;
};

export const protectComputeResponseSchema: Schema<ProtectComputeResponse> = s.object<ProtectComputeResponse>({
  score: s.optionalNullable(s.number()),
  model: s.optional(s.string()),
  attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  subscores: s.optionalNullable(s.lazy(() => protectComputeSubscoresSchema)),
  timestamp: s.optionalNullable(s.dateTime()),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
