import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleDetailSchema, type RoleDetail } from "./role-detail.js";

export type Role = {
  roleDetail: RoleDetail;
};

export const roleSchema: Schema<Role> = s.object<Role>({
  roleDetail: roleDetailSchema,
  _keysMap: {
    roleDetail: "ROLE_DETAIL",
  },
});
