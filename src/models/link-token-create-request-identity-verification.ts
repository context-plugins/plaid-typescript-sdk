import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestIdentityVerification = {
  templateId: string;
  consent?: boolean;
  gaveConsent?: boolean;
};

export const linkTokenCreateRequestIdentityVerificationSchema: Schema<LinkTokenCreateRequestIdentityVerification> =
  s.object<LinkTokenCreateRequestIdentityVerification>({
    templateId: s.string(),
    consent: s.optional(s.boolean()),
    gaveConsent: s.optional(s.boolean()),
    _keysMap: {
      templateId: "template_id",
      gaveConsent: "gave_consent",
    },
  });
