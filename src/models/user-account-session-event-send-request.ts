import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAccountSessionEventSchema, type UserAccountSessionEvent } from "./user-account-session-event.js";

export type UserAccountSessionEventSendRequest = {
  clientId?: string;
  secret?: string;
  cohortId?: string;
  linkSessionId: string;
  event: UserAccountSessionEvent;
};

export const userAccountSessionEventSendRequestSchema: Schema<UserAccountSessionEventSendRequest> =
  s.object<UserAccountSessionEventSendRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    cohortId: s.optional(s.string()),
    linkSessionId: s.string(),
    event: userAccountSessionEventSchema,
    _keysMap: {
      clientId: "client_id",
      cohortId: "cohort_id",
      linkSessionId: "link_session_id",
    },
  });
