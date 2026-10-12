import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How an asset is owned.
 *
 * `association`: Ownership by a corporation, partnership, or unincorporated association, including
 * for-profit and not-for-profit organizations. `individual`: Ownership by an individual. `joint`:
 * Joint ownership by multiple parties. `trust`: Ownership by a revocable or irrevocable trust.
 */
export const OwnershipType = {
  Individual: "individual",
  Joint: "joint",
  Association: "association",
  Trust: "trust",
} as const;
export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType] | (string & {});

export const ownershipTypeSchema: EnumSchema<OwnershipType> = s.enumOf<OwnershipType>(OwnershipType);
