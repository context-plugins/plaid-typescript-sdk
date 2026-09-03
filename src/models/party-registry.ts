import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartyRegistry = {
  Fdx: "FDX",
  Gleif: "GLEIF",
  Icann: "ICANN",
  Private: "PRIVATE",
} as const;
export type PartyRegistry = (typeof PartyRegistry)[keyof typeof PartyRegistry] | (string & {});

export const partyRegistrySchema: EnumSchema<PartyRegistry> = s.enumOf<PartyRegistry>(PartyRegistry);
