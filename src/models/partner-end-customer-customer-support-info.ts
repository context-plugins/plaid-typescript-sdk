import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerEndCustomerCustomerSupportInfo = {
  email?: string;
  phoneNumber?: string;
  contactUrl?: string;
  linkUpdateUrl?: string;
};

export const partnerEndCustomerCustomerSupportInfoSchema: Schema<PartnerEndCustomerCustomerSupportInfo> =
  s.object<PartnerEndCustomerCustomerSupportInfo>({
    email: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    contactUrl: s.optional(s.string()),
    linkUpdateUrl: s.optional(s.string()),
    _keysMap: {
      phoneNumber: "phone_number",
      contactUrl: "contact_url",
      linkUpdateUrl: "link_update_url",
    },
  });
