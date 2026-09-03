import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { weakAliasDeterminationSchema, type WeakAliasDetermination } from "./weak-alias-determination.js";

export type EntityScreeningHitNames = {
  full: string;
  isPrimary: boolean;
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
