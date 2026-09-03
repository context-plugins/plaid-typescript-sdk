import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountSelectionCardinality = {
  SingleSelect: "SINGLE_SELECT",
  MultiSelect: "MULTI_SELECT",
  All: "ALL",
} as const;
export type AccountSelectionCardinality =
  | (typeof AccountSelectionCardinality)[keyof typeof AccountSelectionCardinality]
  | (string & {});

export const accountSelectionCardinalitySchema: EnumSchema<AccountSelectionCardinality> =
  s.enumOf<AccountSelectionCardinality>(AccountSelectionCardinality);
