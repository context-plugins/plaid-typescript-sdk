import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Field describing whether the associated address is being used for commercial or residential
 * purposes.
 *
 * Note: This value will be `no_data` when Plaid does not have sufficient data to determine the
 * address's use.
 */
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
