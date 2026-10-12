import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The full name provided by the user. If the user has not submitted their name, this field will be
 * null. Otherwise, both fields are guaranteed to be filled.
 */
export type IdentityVerificationResponseUserName = {
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  givenName: string;
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
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
