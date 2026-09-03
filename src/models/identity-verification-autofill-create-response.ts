import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationAutofillStatusSchema,
  type IdentityVerificationAutofillStatus,
} from "./identity-verification-autofill-status.js";
import {
  identityVerificationAutofillUserDataSchema,
  type IdentityVerificationAutofillUserData,
} from "./identity-verification-autofill-user-data.js";

export type IdentityVerificationAutofillCreateResponse = {
  status: IdentityVerificationAutofillStatus;
  user: IdentityVerificationAutofillUserData | null;
  requestId: string;
};

export const identityVerificationAutofillCreateResponseSchema: Schema<IdentityVerificationAutofillCreateResponse> =
  s.object<IdentityVerificationAutofillCreateResponse>({
    status: identityVerificationAutofillStatusSchema,
    user: s.nullable(s.lazy(() => identityVerificationAutofillUserDataSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
