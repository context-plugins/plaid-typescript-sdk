import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSchema, type TrustIndex } from "./trust-index.js";

/** Response object for /protect/event/send */
export type ProtectEventSendResponse = {
  /** The id of the recorded event. */
  eventId: string;
  /** Represents a calculated Trust Index Score. */
  trustIndex?: TrustIndex | null;
  /**
   * Event fraud attributes as an arbitrary set of key-value pairs. The set of attributes returned
   * varies by model.
   */
  fraudAttributes?: Record<string, unknown> | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
