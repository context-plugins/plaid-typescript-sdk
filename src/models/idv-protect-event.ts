import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSchema, type TrustIndex } from "./trust-index.js";

/** Information about a Protect event including Trust Index score and fraud attributes. */
export type IdvProtectEvent = {
  /** The event ID. */
  eventId: string;
  /**
   * The timestamp of the event, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2017-09-14T14:42:19.350Z"`
   */
  timestamp: Date;
  /** Represents a calculated Trust Index Score. */
  trustIndex: TrustIndex | null;
  /**
   * Event fraud attributes as an arbitrary set of key-value pairs. The set of attributes returned
   * varies by model.
   */
  fraudAttributes: Record<string, unknown> | null;
};

export const idvProtectEventSchema: Schema<IdvProtectEvent> = s.object<IdvProtectEvent>({
  eventId: s.string(),
  timestamp: s.dateTime(),
  trustIndex: s.nullable(s.lazy(() => trustIndexSchema)),
  fraudAttributes: s.nullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    eventId: "event_id",
    trustIndex: "trust_index",
    fraudAttributes: "fraud_attributes",
  },
});
