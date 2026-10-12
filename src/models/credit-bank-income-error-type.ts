import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A broad categorization of the error. Safe for programmatic use. */
export const CreditBankIncomeErrorType = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  InsufficientCredentials: "INSUFFICIENT_CREDENTIALS",
  ItemLocked: "ITEM_LOCKED",
  UserSetupRequired: "USER_SETUP_REQUIRED",
  CountryNotSupported: "COUNTRY_NOT_SUPPORTED",
  InstitutionDown: "INSTITUTION_DOWN",
  InstitutionNoLongerSupported: "INSTITUTION_NO_LONGER_SUPPORTED",
  InstitutionNotResponding: "INSTITUTION_NOT_RESPONDING",
  InvalidCredentials: "INVALID_CREDENTIALS",
  InvalidMfa: "INVALID_MFA",
  InvalidSendMethod: "INVALID_SEND_METHOD",
  ItemLoginRequired: "ITEM_LOGIN_REQUIRED",
  MfaNotSupported: "MFA_NOT_SUPPORTED",
  NoAccounts: "NO_ACCOUNTS",
  ItemNotSupported: "ITEM_NOT_SUPPORTED",
  AccessNotGranted: "ACCESS_NOT_GRANTED",
} as const;
export type CreditBankIncomeErrorType =
  | (typeof CreditBankIncomeErrorType)[keyof typeof CreditBankIncomeErrorType]
  | (string & {});

export const creditBankIncomeErrorTypeSchema: EnumSchema<CreditBankIncomeErrorType> =
  s.enumOf<CreditBankIncomeErrorType>(CreditBankIncomeErrorType);
