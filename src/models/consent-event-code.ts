import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Codes describing the object of a consent event. */
export const ConsentEventCode = {
  UserAgreement: "USER_AGREEMENT",
  UseCases: "USE_CASES",
  DataScopes: "DATA_SCOPES",
  AccountScopes: "ACCOUNT_SCOPES",
  Revocation: "REVOCATION",
} as const;
export type ConsentEventCode = (typeof ConsentEventCode)[keyof typeof ConsentEventCode] | (string & {});

export const consentEventCodeSchema: EnumSchema<ConsentEventCode> =
  s.enumOf<ConsentEventCode>(ConsentEventCode);
