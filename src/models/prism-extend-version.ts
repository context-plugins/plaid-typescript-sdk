import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrismExtendVersion = {
  _41: "4.1",
  _4: "4",
} as const;
export type PrismExtendVersion = (typeof PrismExtendVersion)[keyof typeof PrismExtendVersion] | (string & {});

export const prismExtendVersionSchema: EnumSchema<PrismExtendVersion> =
  s.enumOf<PrismExtendVersion>(PrismExtendVersion);
