import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WatchlistScreeningEntityUpdateRequestResettableField = {
  Assignee: "assignee",
} as const;
export type WatchlistScreeningEntityUpdateRequestResettableField =
  | (typeof WatchlistScreeningEntityUpdateRequestResettableField)[keyof typeof WatchlistScreeningEntityUpdateRequestResettableField]
  | (string & {});

export const watchlistScreeningEntityUpdateRequestResettableFieldSchema: EnumSchema<WatchlistScreeningEntityUpdateRequestResettableField> =
  s.enumOf<WatchlistScreeningEntityUpdateRequestResettableField>(
    WatchlistScreeningEntityUpdateRequestResettableField,
  );
