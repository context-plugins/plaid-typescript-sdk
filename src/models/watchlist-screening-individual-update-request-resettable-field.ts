import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WatchlistScreeningIndividualUpdateRequestResettableField = {
  Assignee: "assignee",
} as const;
export type WatchlistScreeningIndividualUpdateRequestResettableField =
  | (typeof WatchlistScreeningIndividualUpdateRequestResettableField)[keyof typeof WatchlistScreeningIndividualUpdateRequestResettableField]
  | (string & {});

export const watchlistScreeningIndividualUpdateRequestResettableFieldSchema: EnumSchema<WatchlistScreeningIndividualUpdateRequestResettableField> =
  s.enumOf<WatchlistScreeningIndividualUpdateRequestResettableField>(
    WatchlistScreeningIndividualUpdateRequestResettableField,
  );
