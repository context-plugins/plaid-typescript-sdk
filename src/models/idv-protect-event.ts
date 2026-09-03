import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSchema, type TrustIndex } from "./trust-index.js";

export type IdvProtectEvent = {
  eventId: string;
  timestamp: Date;
  trustIndex: TrustIndex | null;
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
