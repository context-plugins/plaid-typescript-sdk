import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A value from a MISMO defined list that identifies the role that the party plays in the
 * transaction. Parties may be either a person or legal entity. A party may play multiple roles in a
 * transaction.
 */
export const PartyRoleType = {
  Borrower: "Borrower",
} as const;
export type PartyRoleType = (typeof PartyRoleType)[keyof typeof PartyRoleType] | (string & {});

export const partyRoleTypeSchema: EnumSchema<PartyRoleType> = s.enumOf<PartyRoleType>(PartyRoleType);
