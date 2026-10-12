import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userAccountSessionEventSchema, type UserAccountSessionEvent } from "./user-account-session-event.js";

/**
 * UserAccountSessionEventSendRequest defines the request schema for
 * `/user_account/session/event/send`
 */
export type UserAccountSessionEventSendRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** Optional cohort identifier for the user session. */
  cohortId?: string;
  /** The Link session identifier. */
  linkSessionId: string;
  /** Event data for user account session tracking */
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
