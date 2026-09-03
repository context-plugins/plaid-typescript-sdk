import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OmittableTransferType = {
  Debit: "debit",
  Credit: "credit",
} as const;
export type OmittableTransferType =
  | (typeof OmittableTransferType)[keyof typeof OmittableTransferType]
  | (string & {});

export const omittableTransferTypeSchema: EnumSchema<OmittableTransferType> =
  s.enumOf<OmittableTransferType>(OmittableTransferType);
