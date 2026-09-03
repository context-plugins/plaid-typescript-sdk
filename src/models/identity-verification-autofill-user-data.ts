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

export type IdentityVerificationAutofillUserData = {
  name: IdentityVerificationResponseUserName | null;
  address: IdentityVerificationAutofillAddress | null;
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
