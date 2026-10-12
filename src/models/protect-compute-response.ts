import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectComputeSubscoresSchema, type ProtectComputeSubscores } from "./protect-compute-subscores.js";

/** Response object for /protect/compute */
export type ProtectComputeResponse = {
  /** The Trust Index score, on a 0-100 scale where higher values indicate lower risk. */
  score?: number | null;
  /** The versioned name of the Trust Index model used for scoring. */
  model?: string;
  /**
   * Event fraud attributes as an arbitrary set of key-value pairs. The set of attributes returned
   * varies by model.
   */
  attributes?: Record<string, unknown> | null;
  /**
   * Per-bucket subscores returned alongside the overall Trust Index score. For cash-advance models,
   * each key maps to an amount-bucket subscore (0-100); higher values indicate lower fraud risk.
   * Only buckets that were scored are included in the response.
   */
  subscores?: ProtectComputeSubscores | null;
  /**
   * The timestamp when the Trust Index score and fraud attributes were computed, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g. `"2017-09-14T14:42:19.350Z"`
   */
  timestamp?: Date | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const protectComputeResponseSchema: Schema<ProtectComputeResponse> = s.object<ProtectComputeResponse>({
  score: s.optionalNullable(s.int()),
  model: s.optional(s.string()),
  attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
  subscores: s.optionalNullable(s.lazy(() => protectComputeSubscoresSchema)),
  timestamp: s.optionalNullable(s.dateTime()),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
