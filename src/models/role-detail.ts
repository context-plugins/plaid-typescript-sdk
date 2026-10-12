import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partyRoleTypeSchema, type PartyRoleType } from "./party-role-type.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type RoleDetail = {
  /**
   * A value from a MISMO defined list that identifies the role that the party plays in the
   * transaction. Parties may be either a person or legal entity. A party may play multiple roles in
   * a transaction.
   */
  partyRoleType: PartyRoleType;
};

export const roleDetailSchema: Schema<RoleDetail> = s.object<RoleDetail>({
  partyRoleType: partyRoleTypeSchema,
  _keysMap: {
    partyRoleType: "PartyRoleType",
  },
});
