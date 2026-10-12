import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of Prism Extend */
export const PrismExtendVersion = {
  /** The `4.1` Prism Extend version. */
  _41: "4.1",
  /** The `4` Prism Extend version. */
  _4: "4",
} as const;
export type PrismExtendVersion = (typeof PrismExtendVersion)[keyof typeof PrismExtendVersion] | (string & {});

export const prismExtendVersionSchema: EnumSchema<PrismExtendVersion> =
  s.enumOf<PrismExtendVersion>(PrismExtendVersion);
