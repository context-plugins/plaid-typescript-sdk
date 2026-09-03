import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditSessionErrorSchema, type CreditSessionError } from "./credit-session-error.js";
import { creditSessionResultsSchema, type CreditSessionResults } from "./credit-session-results.js";

export type CreditSession = {
  linkSessionId?: string;
  sessionStartTime?: Date;
  results?: CreditSessionResults;
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
