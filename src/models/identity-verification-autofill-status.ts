import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A status enum indicating whether autofill succeeded or failed. */
export const IdentityVerificationAutofillStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type IdentityVerificationAutofillStatus =
  | (typeof IdentityVerificationAutofillStatus)[keyof typeof IdentityVerificationAutofillStatus]
  | (string & {});

export const identityVerificationAutofillStatusSchema: EnumSchema<IdentityVerificationAutofillStatus> =
  s.enumOf<IdentityVerificationAutofillStatus>(IdentityVerificationAutofillStatus);
