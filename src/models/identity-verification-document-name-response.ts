import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The individual's name extracted from the document. */
export type IdentityVerificationDocumentNameResponse = {
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  givenName: string;
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  familyName: string;
};

export const identityVerificationDocumentNameResponseSchema: Schema<IdentityVerificationDocumentNameResponse> =
  s.object<IdentityVerificationDocumentNameResponse>({
    givenName: s.string(),
    familyName: s.string(),
    _keysMap: {
      givenName: "given_name",
      familyName: "family_name",
    },
  });
