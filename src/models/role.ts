import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleDetailSchema, type RoleDetail } from "./role-detail.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type Role = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  roleDetail: RoleDetail;
};

export const roleSchema: Schema<Role> = s.object<Role>({
  roleDetail: roleDetailSchema,
  _keysMap: {
    roleDetail: "ROLE_DETAIL",
  },
});
