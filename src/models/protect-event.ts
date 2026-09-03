import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectEvent = {
  timestamp: Date;
  protectSessionId?: string;
  appVisit?: Record<string, unknown> | null;
  userSignIn?: Record<string, unknown> | null;
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
