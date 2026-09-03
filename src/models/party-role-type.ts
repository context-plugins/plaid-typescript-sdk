import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartyRoleType = {
  Borrower: "Borrower",
} as const;
export type PartyRoleType = (typeof PartyRoleType)[keyof typeof PartyRoleType] | (string & {});

export const partyRoleTypeSchema: EnumSchema<PartyRoleType> = s.enumOf<PartyRoleType>(PartyRoleType);
