import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * This information is public. Users of your app will see this information when managing connections
 * between your app and their bank accounts in Plaid Portal. Defaults to partner's customer support
 * info if omitted. This field is mandatory for partners whose Plaid accounts were created after
 * November 26, 2024 and will be mandatory for all partners by the 1033 compliance deadline.
 */
export type PartnerEndCustomerCustomerSupportInfo = {
  /**
   * This field is mandatory for partners whose Plaid accounts were created after November 26, 2024
   * and will be mandatory for all partners by the 1033 compliance deadline.
   */
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
