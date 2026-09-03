import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationResponseUserName = {
  givenName: string;
  familyName: string;
};

export const identityVerificationResponseUserNameSchema: Schema<IdentityVerificationResponseUserName> =
  s.object<IdentityVerificationResponseUserName>({
    givenName: s.string(),
    familyName: s.string(),
    _keysMap: {
      givenName: "given_name",
      familyName: "family_name",
    },
  });
