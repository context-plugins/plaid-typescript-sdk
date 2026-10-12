import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the last successful and failed investments update for the Item. */
export type ItemStatusInvestments = {
  /**
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp of the last successful investments
   * update for the Item. The status will update each time Plaid successfully connects with the
   * institution, regardless of whether any new data is available in the update.
   */
  lastSuccessfulUpdate?: Date | null;
  /**
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp of the last failed investments update
   * for the Item. The status will update each time Plaid fails an attempt to connect with the
   * institution, regardless of whether any new data is available in the update.
   */
  lastFailedUpdate?: Date | null;
};

export const itemStatusInvestmentsSchema: Schema<ItemStatusInvestments> = s.object<ItemStatusInvestments>({
  lastSuccessfulUpdate: s.optionalNullable(s.dateTime()),
  lastFailedUpdate: s.optionalNullable(s.dateTime()),
  _keysMap: {
    lastSuccessfulUpdate: "last_successful_update",
    lastFailedUpdate: "last_failed_update",
  },
});
