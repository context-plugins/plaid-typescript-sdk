import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraBankIncomeBonusType = {
  BonusIncluded: "BONUS_INCLUDED",
  BonusOnly: "BONUS_ONLY",
} as const;
export type CraBankIncomeBonusType =
  | (typeof CraBankIncomeBonusType)[keyof typeof CraBankIncomeBonusType]
  | (string & {});

export const craBankIncomeBonusTypeSchema: EnumSchema<CraBankIncomeBonusType> =
  s.enumOf<CraBankIncomeBonusType>(CraBankIncomeBonusType);
