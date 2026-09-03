import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferUserAddressInResponse = {
  street: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
};

export const transferUserAddressInResponseSchema: Schema<TransferUserAddressInResponse> =
  s.object<TransferUserAddressInResponse>({
    street: s.nullable(s.string()),
    city: s.nullable(s.string()),
    region: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    country: s.nullable(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
