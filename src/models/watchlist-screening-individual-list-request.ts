import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningStatusSchema,
  type WatchlistScreeningStatus,
} from "./watchlist-screening-status.js";

/** Request input for listing watchlist screenings for individuals */
export type WatchlistScreeningIndividualListRequest = {
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /** ID of the associated program. */
  watchlistProgramId: string;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId?: string;
  /**
   * A status enum indicating whether a screening is still pending review, has been rejected, or has
   * been cleared.
   */
  status?: WatchlistScreeningStatus;
  /**
   * ID of the associated user. To retrieve the email address or other details of the person
   * corresponding to this ID, use `/dashboard_user/get`.
   */
  assignee?: string;
  /** An identifier that determines which page of results you receive. */
  cursor?: string | null;
};

export const watchlistScreeningIndividualListRequestSchema: Schema<WatchlistScreeningIndividualListRequest> =
  s.object<WatchlistScreeningIndividualListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    watchlistProgramId: s.string(),
    clientUserId: s.optional(s.string()),
    status: s.optional(s.lazy(() => watchlistScreeningStatusSchema)),
    assignee: s.optional(s.string()),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      watchlistProgramId: "watchlist_program_id",
      clientUserId: "client_user_id",
    },
  });
