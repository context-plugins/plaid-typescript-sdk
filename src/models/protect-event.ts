import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Event data for Protect events. */
export type ProtectEvent = {
  /**
   * The timestamp of the event, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2017-09-14T14:42:19.350Z"`
   */
  timestamp: Date;
  /** If present, contains the current Protect Session ID from the Protect SDK. */
  protectSessionId?: string;
  /** This event type represents a user visiting the client application. */
  appVisit?: Record<string, unknown> | null;
  /** This event type represents a user signing in to the application. */
  userSignIn?: Record<string, unknown> | null;
  /** This event type represents a user signing up for the application. */
  userSignUp?: Record<string, unknown> | null;
};

export const protectEventSchema: Schema<ProtectEvent> = s.object<ProtectEvent>({
  timestamp: s.dateTime(),
  protectSessionId: s.optional(s.string()),
  appVisit: s.optionalNullable(s.record(s.string(), s.unknown())),
  userSignIn: s.optionalNullable(s.record(s.string(), s.unknown())),
  userSignUp: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    protectSessionId: "protect_session_id",
    appVisit: "app_visit",
    userSignIn: "user_sign_in",
    userSignUp: "user_sign_up",
  },
});
