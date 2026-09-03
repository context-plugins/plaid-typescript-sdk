import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSchema, type TrustIndex } from "./trust-index.js";

export type ProtectEventSendResponse = {
  eventId: string;
  trustIndex?: TrustIndex | null;
  fraudAttributes?: Record<string, unknown> | null;
  requestId: string;
};

export const protectEventSendResponseSchema: Schema<ProtectEventSendResponse> =
  s.object<ProtectEventSendResponse>({
    eventId: s.string(),
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
