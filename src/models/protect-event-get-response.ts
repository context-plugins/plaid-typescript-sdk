import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSchema, type TrustIndex } from "./trust-index.js";

export type ProtectEventGetResponse = {
  eventId: string;
  timestamp: Date;
  trustIndex?: TrustIndex | null;
  fraudAttributes?: Record<string, unknown> | null;
  requestId: string;
};

export const protectEventGetResponseSchema: Schema<ProtectEventGetResponse> =
  s.object<ProtectEventGetResponse>({
    eventId: s.string(),
    timestamp: s.dateTime(),
    trustIndex: s.optionalNullable(s.lazy(() => trustIndexSchema)),
    fraudAttributes: s.optionalNullable(s.record(s.string(), s.unknown())),
    requestId: s.string(),
    _keysMap: {
      eventId: "event_id",
      trustIndex: "trust_index",
      fraudAttributes: "fraud_attributes",
      requestId: "request_id",
    },
  });
