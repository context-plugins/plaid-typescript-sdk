import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { weakAliasDeterminationSchema, type WeakAliasDetermination } from "./weak-alias-determination.js";

/** Name information for the associated individual watchlist hit */
export type IndividualScreeningHitNames = {
  /** The full name of the individual, including all parts. */
  full: string;
  /**
   * Primary names are those most commonly used to refer to this person. Only one name will ever be
   * marked as primary.
   */
  isPrimary: boolean;
  /**
   * Names that are explicitly marked as low quality either by their `source` list, or by `plaid` by
   * a series of additional checks done by Plaid. Plaid does not ever surface a hit as a result of a
   * weak name alone. If a name has no quality issues, this value will be `none`.
   */
  weakAliasDetermination: WeakAliasDetermination;
};

export const individualScreeningHitNamesSchema: Schema<IndividualScreeningHitNames> =
  s.object<IndividualScreeningHitNames>({
    full: s.string(),
    isPrimary: s.boolean(),
    weakAliasDetermination: weakAliasDeterminationSchema,
    _keysMap: {
      isPrimary: "is_primary",
      weakAliasDetermination: "weak_alias_determination",
    },
  });
