import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OwnershipType = {
  Individual: "individual",
  Joint: "joint",
  Association: "association",
  Trust: "trust",
} as const;
export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType] | (string & {});

export const ownershipTypeSchema: EnumSchema<OwnershipType> = s.enumOf<OwnershipType>(OwnershipType);
