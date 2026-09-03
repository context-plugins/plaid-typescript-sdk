import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAccountIdentityEditCounts = {
  editsCurrent?: number;
  edits1D?: number;
  edits30D?: number;
  edits365D?: number;
  editsAllTime?: number;
};

export const userAccountIdentityEditCountsSchema: Schema<UserAccountIdentityEditCounts> =
  s.object<UserAccountIdentityEditCounts>({
    editsCurrent: s.optional(s.number()),
    edits1D: s.optional(s.number()),
    edits30D: s.optional(s.number()),
    edits365D: s.optional(s.number()),
    editsAllTime: s.optional(s.number()),
    _keysMap: {
      editsCurrent: "edits_current",
      edits1D: "edits_1d",
      edits30D: "edits_30d",
      edits365D: "edits_365d",
      editsAllTime: "edits_all_time",
    },
  });
