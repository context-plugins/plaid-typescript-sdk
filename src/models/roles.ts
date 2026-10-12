import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type Roles = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  role: Role;
};

export const rolesSchema: Schema<Roles> = s.object<Roles>({
  role: roleSchema,
  _keysMap: {
    role: "ROLE",
  },
});
