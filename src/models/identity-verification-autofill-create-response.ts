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

/**
 * Autofill represents unverified customer information. This needs to be confirmed by the customer
 * before using.
 */
export type IdentityVerificationAutofillCreateResponse = {
  /** A status enum indicating whether autofill succeeded or failed. */
  status: IdentityVerificationAutofillStatus;
  /**
   * User information that was autofilled. All this information should be confirmed by the user
   * before using.
   */
  user: IdentityVerificationAutofillUserData | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
