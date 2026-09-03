import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSchema, type TrustIndex } from "./trust-index.js";

export type LatestScoredEvent = {
  eventId: string;
  timestamp: Date;
  eventType?: string;
  trustIndex: TrustIndex | null;
  fraudAttributes: Record<string, unknown> | null;
};

export const latestScoredEventSchema: Schema<LatestScoredEvent> = s.object<LatestScoredEvent>({
  eventId: s.string(),
  timestamp: s.dateTime(),
  eventType: s.optional(s.string()),
  trustIndex: s.nullable(s.lazy(() => trustIndexSchema)),
  fraudAttributes: s.nullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    eventId: "event_id",
    eventType: "event_type",
    trustIndex: "trust_index",
    fraudAttributes: "fraud_attributes",
  },
});
