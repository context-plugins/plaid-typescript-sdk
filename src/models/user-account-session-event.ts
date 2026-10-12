import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Event data for user account session tracking */
export type UserAccountSessionEvent = {
  /** The name of the event. */
  name: string;
  /** The timestamp when the event occurred in ISO 8601 format. */
  timestamp: Date;
  /** Optional outcome of the event. */
  outcome?: string;
};

export const userAccountSessionEventSchema: Schema<UserAccountSessionEvent> =
  s.object<UserAccountSessionEvent>({
    name: s.string(),
    timestamp: s.dateTime(),
    outcome: s.optional(s.string()),
  });
