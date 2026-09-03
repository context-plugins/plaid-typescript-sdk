import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressPurposeLabelSchema, type AddressPurposeLabel } from "./address-purpose-label.js";
import { poBoxStatusSchema, type PoBoxStatus } from "./po-box-status.js";

export type IdentityVerificationAutofillAddress = {
  street: string;
  street2: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string;
  poBox: PoBoxStatus;
  type: AddressPurposeLabel;
};

export const identityVerificationAutofillAddressSchema: Schema<IdentityVerificationAutofillAddress> =
  s.object<IdentityVerificationAutofillAddress>({
    street: s.string(),
    street2: s.nullable(s.string()),
    city: s.nullable(s.string()),
    region: s.nullable(s.string()),
    postalCode: s.nullable(s.string()),
    country: s.string(),
    poBox: poBoxStatusSchema,
    type: addressPurposeLabelSchema,
    _keysMap: {
      postalCode: "postal_code",
      poBox: "po_box",
    },
  });
