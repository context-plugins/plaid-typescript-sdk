import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AddressPurposeLabel = {
  Residential: "residential",
  Commercial: "commercial",
  NoData: "no_data",
} as const;
export type AddressPurposeLabel =
  | (typeof AddressPurposeLabel)[keyof typeof AddressPurposeLabel]
  | (string & {});

export const addressPurposeLabelSchema: EnumSchema<AddressPurposeLabel> =
  s.enumOf<AddressPurposeLabel>(AddressPurposeLabel);
