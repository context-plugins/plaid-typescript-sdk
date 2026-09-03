import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAccountSessionEvent = {
  name: string;
  timestamp: Date;
  outcome?: string;
};

export const userAccountSessionEventSchema: Schema<UserAccountSessionEvent> =
  s.object<UserAccountSessionEvent>({
    name: s.string(),
    timestamp: s.dateTime(),
    outcome: s.optional(s.string()),
  });
