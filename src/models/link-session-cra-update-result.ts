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

/** The details of a Plaid Check Item update via update mode in Link. */
export type LinkSessionCraUpdateResult = {
  /**
   * The Plaid Check Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. The `item_id` is
   * case-sensitive.
   */
  itemId: string;
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

export const linkSessionCraUpdateResultSchema: Schema<LinkSessionCraUpdateResult> =
  s.object<LinkSessionCraUpdateResult>({
    itemId: s.string(),
    accounts: s.array(s.lazy(() => linkSessionSuccessMetadataAccountSchema)),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      itemId: "item_id",
    },
  });
