import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transfer. Valid values are `debit` or `credit`. A `debit` indicates a transfer of
 * money into the origination account; a `credit` indicates a transfer of money out of the
 * origination account. This field is omitted for Plaid Ledger Sweep events.
 */
export const OmittableTransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type OmittableTransferType =
  | (typeof OmittableTransferType)[keyof typeof OmittableTransferType]
  | (string & {});

export const omittableTransferTypeSchema: EnumSchema<OmittableTransferType> =
  s.enumOf<OmittableTransferType>(OmittableTransferType);
