import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerEndCustomerBillingContact = {
  givenName?: string;
  familyName?: string;
  email?: string;
};

export const partnerEndCustomerBillingContactSchema: Schema<PartnerEndCustomerBillingContact> =
  s.object<PartnerEndCustomerBillingContact>({
    givenName: s.optional(s.string()),
    familyName: s.optional(s.string()),
    email: s.optional(s.string()),
    _keysMap: {
      givenName: "given_name",
      familyName: "family_name",
    },
  });
