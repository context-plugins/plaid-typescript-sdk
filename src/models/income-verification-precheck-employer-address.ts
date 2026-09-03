import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeVerificationPrecheckEmployerAddress = {
  city?: string;
  country?: string;
  postalCode?: string;
  region?: string;
  street?: string;
};

export const incomeVerificationPrecheckEmployerAddressSchema: Schema<IncomeVerificationPrecheckEmployerAddress> =
  s.object<IncomeVerificationPrecheckEmployerAddress>({
    city: s.optional(s.string()),
    country: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    region: s.optional(s.string()),
    street: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
