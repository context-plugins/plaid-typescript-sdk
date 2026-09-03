import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HoldingTaxLotPositionType = {
  Long: "LONG",
  Short: "SHORT",
} as const;
export type HoldingTaxLotPositionType =
  | (typeof HoldingTaxLotPositionType)[keyof typeof HoldingTaxLotPositionType]
  | (string & {});

export const holdingTaxLotPositionTypeSchema: EnumSchema<HoldingTaxLotPositionType> =
  s.enumOf<HoldingTaxLotPositionType>(HoldingTaxLotPositionType);
