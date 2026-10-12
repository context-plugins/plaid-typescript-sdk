import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specifies option for initializing Link for use with the Identity Verification product. */
export type LinkTokenCreateRequestIdentityVerification = {
  templateId: string;
  consent?: boolean;
  /**
   * A flag specifying whether the end user has already agreed to a privacy policy specifying that
   * their data will be shared with Plaid for verification purposes.
   *
   * If `gave_consent` is set to `true`, the `accept_tos` step will be marked as `skipped` and the
   * end user's session will start at the next step requirement.
   *
   * @default false
   */
  gaveConsent?: boolean;
};

export const linkTokenCreateRequestIdentityVerificationSchema: Schema<LinkTokenCreateRequestIdentityVerification> =
  s.object<LinkTokenCreateRequestIdentityVerification>({
    templateId: s.string(),
    consent: s.optional(s.boolean()),
    gaveConsent: s.defaulted(s.boolean(), false),
    _keysMap: {
      templateId: "template_id",
      gaveConsent: "gave_consent",
    },
  });
