import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * You can use this field to pre-populate the user's legal name; if it is provided here, they will
 * not be prompted to enter their name in the identity verification attempt.
 */
export type IdentityVerificationRequestUserName = {
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  givenName: string;
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  familyName: string;
};

export const identityVerificationRequestUserNameSchema: Schema<IdentityVerificationRequestUserName> =
  s.object<IdentityVerificationRequestUserName>({
    givenName: s.string(),
    familyName: s.string(),
    _keysMap: {
      givenName: "given_name",
      familyName: "family_name",
    },
  });
