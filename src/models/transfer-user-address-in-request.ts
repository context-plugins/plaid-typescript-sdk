import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferUserAddressInRequest = {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
};

export const transferUserAddressInRequestSchema: Schema<TransferUserAddressInRequest> =
  s.object<TransferUserAddressInRequest>({
    street: s.optional(s.string()),
    city: s.optional(s.string()),
    region: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    country: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
