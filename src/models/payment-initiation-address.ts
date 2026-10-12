import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The optional address of the payment recipient's bank account. Required by most institutions
 * outside of the UK.
 */
export type PaymentInitiationAddress = {
  /**
   * An array of length 1-2 representing the street address where the recipient is located. Maximum
   * of 70 characters.
   */
  street: string[];
  /** The city where the recipient is located. Maximum of 35 characters. */
  city: string;
  /** The postal code where the recipient is located. Maximum of 16 characters. */
  postalCode: string;
  /** The ISO 3166-1 alpha-2 country code where the recipient is located. */
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
