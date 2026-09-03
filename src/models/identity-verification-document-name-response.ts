import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityVerificationDocumentNameResponse = {
  givenName: string;
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
