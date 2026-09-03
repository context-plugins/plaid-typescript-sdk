import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientUserIdentityName = {
  givenName: string;
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
