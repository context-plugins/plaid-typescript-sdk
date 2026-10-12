import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The technical contact for the end customer. Defaults to partner's technical contact if omitted.
 */
export type PartnerEndCustomerTechnicalContact = {
  givenName?: string;
  familyName?: string;
  email?: string;
};

export const partnerEndCustomerTechnicalContactSchema: Schema<PartnerEndCustomerTechnicalContact> =
  s.object<PartnerEndCustomerTechnicalContact>({
    givenName: s.optional(s.string()),
    familyName: s.optional(s.string()),
    email: s.optional(s.string()),
    _keysMap: {
      givenName: "given_name",
      familyName: "family_name",
    },
  });
