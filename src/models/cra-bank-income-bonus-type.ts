import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of bonus that this transaction represents, if it is a bonus. `BONUS_INCLUDED`: Bonus is
 * included in this transaction along with the normal pay `BONUS_ONLY`: This transaction is a
 * standalone bonus
 */
export const CraBankIncomeBonusType = {
  BonusIncluded: "BONUS_INCLUDED",
  BonusOnly: "BONUS_ONLY",
} as const;
export type CraBankIncomeBonusType =
  | (typeof CraBankIncomeBonusType)[keyof typeof CraBankIncomeBonusType]
  | (string & {});

export const craBankIncomeBonusTypeSchema: EnumSchema<CraBankIncomeBonusType> =
  s.enumOf<CraBankIncomeBonusType>(CraBankIncomeBonusType);
