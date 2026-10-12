import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { weakAliasDeterminationSchema, type WeakAliasDetermination } from "./weak-alias-determination.js";

/** Name information for the associated entity watchlist hit */
export type EntityScreeningHitNames = {
  /** The full name of the entity. */
  full: string;
  /**
   * Primary names are those most commonly used to refer to this entity. Only one name will ever be
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

export const entityScreeningHitNamesSchema: Schema<EntityScreeningHitNames> =
  s.object<EntityScreeningHitNames>({
    full: s.string(),
    isPrimary: s.boolean(),
    weakAliasDetermination: weakAliasDeterminationSchema,
    _keysMap: {
      isPrimary: "is_primary",
      weakAliasDetermination: "weak_alias_determination",
    },
  });
