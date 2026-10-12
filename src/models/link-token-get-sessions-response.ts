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

/**
 * An object containing information about a link session. Session data will be provided for up to
 * six hours after the session has ended.
 */
export type LinkTokenGetSessionsResponse = {
  /** The unique ID for the link session. */
  linkSessionId: string;
  /**
   * The timestamp at which the link session was first started, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  startedAt?: Date;
  /**
   * The timestamp at which the link session was finished, if available, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  finishedAt?: Date | null;
  /**
   * An object representing an [onSuccess](https://plaid.com/docs/link/web/#onsuccess) callback from
   * Link. This field is returned only for legacy integrations and is deprecated in favor of
   * [`results.item_add_results`](https://plaid.com/docs/api/link/#link-token-get-response-link-sessions-results-item-add-results)
   * which can support multiple public tokens in a single Link session, for flows such as multi-Item
   * Link. If you are receiving `on_success`, contact your account manager to migrate to
   * `results.item_add_results` instead.
   *
   * @deprecated
   */
  onSuccess?: LinkSessionSuccess | null;
  /**
   * An object representing an [onExit](https://plaid.com/docs/link/web/#onexit) callback from Link.
   * This field is returned only for legacy implementations and has been deprecated in favor of
   * [`exit`](https://plaid.com/docs/api/link/#link-token-get-response-link-sessions-exit), for
   * improved naming consistency. If you are receiving this field, contact your account manager to
   * migrate to the newer `exit` field.
   *
   * @deprecated
   */
  onExit?: LinkSessionExitDeprecated | null;
  /**
   * An object representing an [onExit](https://plaid.com/docs/link/web/#onexit) callback from Link.
   * If you are not receiving this field and are instead receiving the deprecated `on_exit` field,
   * contact your account manager to update your integration.
   */
  exit?: LinkSessionExit | null;
  /** List of customer-related Link events */
  events?: LinkEvent[];
  /** The set of results for a Link session. */
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
