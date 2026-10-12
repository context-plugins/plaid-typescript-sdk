import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditSessionErrorSchema, type CreditSessionError } from "./credit-session-error.js";
import { creditSessionResultsSchema, type CreditSessionResults } from "./credit-session-results.js";

/** Metadata and results for a Link session */
export type CreditSession = {
  /**
   * The unique identifier associated with the Link session. This identifier matches the
   * `link_session_id` returned in the onSuccess/onExit callbacks.
   */
  linkSessionId?: string;
  /** The time when the Link session started */
  sessionStartTime?: Date;
  /** The set of results for a Link session. */
  results?: CreditSessionResults;
  /** The set of errors that occurred during the Link session. */
  errors?: CreditSessionError[];
};

export const creditSessionSchema: Schema<CreditSession> = s.object<CreditSession>({
  linkSessionId: s.optional(s.string()),
  sessionStartTime: s.optional(s.dateTime()),
  results: s.optional(s.lazy(() => creditSessionResultsSchema)),
  errors: s.optional(s.array(s.lazy(() => creditSessionErrorSchema))),
  _keysMap: {
    linkSessionId: "link_session_id",
    sessionStartTime: "session_start_time",
  },
});
