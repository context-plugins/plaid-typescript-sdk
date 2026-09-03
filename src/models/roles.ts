import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type Roles = {
  role: Role;
};

export const rolesSchema: Schema<Roles> = s.object<Roles>({
  role: roleSchema,
  _keysMap: {
    role: "ROLE",
  },
});
