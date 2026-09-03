import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkEventSchema, type LinkEvent } from "./link-event.js";
import {
  linkSessionExitDeprecatedSchema,
  type LinkSessionExitDeprecated,
} from "./link-session-exit-deprecated.js";
import { linkSessionExitSchema, type LinkSessionExit } from "./link-session-exit.js";
import { linkSessionResultsSchema, type LinkSessionResults } from "./link-session-results.js";
import { linkSessionSuccessSchema, type LinkSessionSuccess } from "./link-session-success.js";

export type LinkTokenGetSessionsResponse = {
  linkSessionId: string;
  startedAt?: Date;
  finishedAt?: Date | null;
  onSuccess?: LinkSessionSuccess | null;
  onExit?: LinkSessionExitDeprecated | null;
  exit?: LinkSessionExit | null;
  events?: LinkEvent[];
  results?: LinkSessionResults | null;
};

export const linkTokenGetSessionsResponseSchema: Schema<LinkTokenGetSessionsResponse> =
  s.object<LinkTokenGetSessionsResponse>({
    linkSessionId: s.string(),
    startedAt: s.optional(s.dateTime()),
    finishedAt: s.optionalNullable(s.dateTime()),
    onSuccess: s.optionalNullable(s.lazy(() => linkSessionSuccessSchema)),
    onExit: s.optionalNullable(s.lazy(() => linkSessionExitDeprecatedSchema)),
    exit: s.optionalNullable(s.lazy(() => linkSessionExitSchema)),
    events: s.optional(s.array(s.lazy(() => linkEventSchema))),
    results: s.optionalNullable(s.lazy(() => linkSessionResultsSchema)),
    _keysMap: {
      linkSessionId: "link_session_id",
      startedAt: "started_at",
      finishedAt: "finished_at",
      onSuccess: "on_success",
      onExit: "on_exit",
    },
  });
