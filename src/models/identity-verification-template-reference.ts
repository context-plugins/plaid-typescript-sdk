import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The resource ID and version number of the template configuring the behavior of a given Identity
 * Verification.
 */
export type IdentityVerificationTemplateReference = {
  /**
   * ID of the associated Identity Verification template. Like all Plaid identifiers, this is
   * case-sensitive.
   */
  id: string;
  /** Version of the associated Identity Verification template. */
  version: number;
};

export const identityVerificationTemplateReferenceSchema: Schema<IdentityVerificationTemplateReference> =
  s.object<IdentityVerificationTemplateReference>({
    id: s.string(),
    version: s.int(),
  });
