import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionSuccessMetadataAccountSchema,
  type LinkSessionSuccessMetadataAccount,
} from "./link-session-success-metadata-account.js";
import {
  linkSessionSuccessMetadataInstitutionSchema,
  type LinkSessionSuccessMetadataInstitution,
} from "./link-session-success-metadata-institution.js";

/** The details of an Item add in Link. */
export type LinkSessionItemAddResult = {
  /** Returned once a user has successfully linked their Item. */
  publicToken: string;
  /**
   * A list of accounts attached to the connected Item. If Account Select is enabled via the
   * developer dashboard, `accounts` will only include selected accounts.
   */
  accounts: LinkSessionSuccessMetadataAccount[];
  /**
   * An institution object. If the Item was created via Same-Day or Instant micro-deposit
   * verification, will be `null`.
   */
  institution: LinkSessionSuccessMetadataInstitution | null;
};

export const linkSessionItemAddResultSchema: Schema<LinkSessionItemAddResult> =
  s.object<LinkSessionItemAddResult>({
    publicToken: s.string(),
    accounts: s.array(s.lazy(() => linkSessionSuccessMetadataAccountSchema)),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      publicToken: "public_token",
    },
  });
