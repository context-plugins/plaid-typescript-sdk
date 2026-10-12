import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Edit counts over various time periods. */
export type UserAccountIdentityEditCounts = {
  /** Number of edits in the current session */
  editsCurrent?: number;
  /** Number of edits in the last 1 day */
  edits1D?: number;
  /** Number of edits in the last 30 days */
  edits30D?: number;
  /** Number of edits in the last 365 days */
  edits365D?: number;
  /** Total number of edits */
  editsAllTime?: number;
};

export const userAccountIdentityEditCountsSchema: Schema<UserAccountIdentityEditCounts> =
  s.object<UserAccountIdentityEditCounts>({
    editsCurrent: s.optional(s.int()),
    edits1D: s.optional(s.int()),
    edits30D: s.optional(s.int()),
    edits365D: s.optional(s.int()),
    editsAllTime: s.optional(s.int()),
    _keysMap: {
      editsCurrent: "edits_current",
      edits1D: "edits_1d",
      edits30D: "edits_30d",
      edits365D: "edits_365d",
      editsAllTime: "edits_all_time",
    },
  });
