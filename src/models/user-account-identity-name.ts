import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's first name and last name. */
export type UserAccountIdentityName = {
  firstName?: string;
  lastName?: string;
};

export const userAccountIdentityNameSchema: Schema<UserAccountIdentityName> =
  s.object<UserAccountIdentityName>({
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
    },
  });
