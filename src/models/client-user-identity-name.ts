import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** User name information. */
export type ClientUserIdentityName = {
  /** User's given name. */
  givenName: string;
  /** User's family name. */
  familyName: string;
};

export const clientUserIdentityNameSchema: Schema<ClientUserIdentityName> = s.object<ClientUserIdentityName>({
  givenName: s.string(),
  familyName: s.string(),
  _keysMap: {
    givenName: "given_name",
    familyName: "family_name",
  },
});
