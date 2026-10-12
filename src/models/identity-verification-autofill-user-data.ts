import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationAutofillAddressSchema,
  type IdentityVerificationAutofillAddress,
} from "./identity-verification-autofill-address.js";
import {
  identityVerificationResponseUserNameSchema,
  type IdentityVerificationResponseUserName,
} from "./identity-verification-response-user-name.js";
import { userIdNumberSchema, type UserIdNumber } from "./user-id-number.js";

/**
 * User information that was autofilled. All this information should be confirmed by the user before
 * using.
 */
export type IdentityVerificationAutofillUserData = {
  /**
   * The full name provided by the user. If the user has not submitted their name, this field will
   * be null. Otherwise, both fields are guaranteed to be filled.
   */
  name: IdentityVerificationResponseUserName | null;
  /**
   * Even if an address has been autofilled, some fields may be null depending on the region's
   * addressing system. For example:
   *
   * Addresses from the United Kingdom will not include a region
   *
   * Addresses from Hong Kong will not include postal code
   */
  address: IdentityVerificationAutofillAddress | null;
  /**
   * ID number submitted by the user, currently used only for the Identity Verification product. If
   * the user has not submitted this data yet, this field will be `null`. Otherwise, both fields are
   * guaranteed to be filled.
   */
  idNumber: UserIdNumber | null;
};

export const identityVerificationAutofillUserDataSchema: Schema<IdentityVerificationAutofillUserData> =
  s.object<IdentityVerificationAutofillUserData>({
    name: s.nullable(s.lazy(() => identityVerificationResponseUserNameSchema)),
    address: s.nullable(s.lazy(() => identityVerificationAutofillAddressSchema)),
    idNumber: s.nullable(s.lazy(() => userIdNumberSchema)),
    _keysMap: {
      idNumber: "id_number",
    },
  });
