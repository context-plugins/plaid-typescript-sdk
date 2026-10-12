import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourceSchema, type Source } from "./source.js";

/**
 * Information about the last change made to the parent object specifying what caused the change as
 * well as when it occurred.
 */
export type WatchlistScreeningAuditTrail = {
  /**
   * A type indicating who or what last touched this object. `dashboard`, `link`, and `api` indicate
   * the originating surface; `system` indicates Plaid. `retro` indicates a screening created
   * retroactively via a bulk screening creation.
   */
  source: Source;
  /**
   * ID of the associated user. To retrieve the email address or other details of the person
   * corresponding to this ID, use `/dashboard_user/get`.
   */
  dashboardUserId: string | null;
  /** An ISO8601 formatted timestamp. */
  timestamp: Date;
};

export const watchlistScreeningAuditTrailSchema: Schema<WatchlistScreeningAuditTrail> =
  s.object<WatchlistScreeningAuditTrail>({
    source: sourceSchema,
    dashboardUserId: s.nullable(s.string()),
    timestamp: s.dateTime(),
    _keysMap: {
      dashboardUserId: "dashboard_user_id",
    },
  });
