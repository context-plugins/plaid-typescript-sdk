import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RoleDetail = {
  partyRoleType: "Borrower";
};

export const roleDetailSchema: Schema<RoleDetail> = s.object<RoleDetail>({
  partyRoleType: s.literal("Borrower"),
  _keysMap: {
    partyRoleType: "PartyRoleType",
  },
});
