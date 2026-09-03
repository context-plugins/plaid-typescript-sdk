import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInitiationAddress = {
  street: string[];
  city: string;
  postalCode: string;
  country: string;
};

export const paymentInitiationAddressSchema: Schema<PaymentInitiationAddress> =
  s.object<PaymentInitiationAddress>({
    street: s.array(s.string()),
    city: s.string(),
    postalCode: s.string(),
    country: s.string(),
    _keysMap: {
      postalCode: "postal_code",
    },
  });
