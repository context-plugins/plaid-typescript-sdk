import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSchema, type TrustIndex } from "./trust-index.js";

/** Response object for /protect/event/get */
export type ProtectEventGetResponse = {
  /** The event ID. */
  eventId: string;
  /**
   * The timestamp of the event, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2017-09-14T14:42:19.350Z"`
   */
  timestamp: Date;
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
