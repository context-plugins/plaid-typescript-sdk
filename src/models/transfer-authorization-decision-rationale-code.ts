import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferAuthorizationDecisionRationaleCode = {
  Nsf: "NSF",
  Risk: "RISK",
  TransferLimitReached: "TRANSFER_LIMIT_REACHED",
  ManuallyVerifiedItem: "MANUALLY_VERIFIED_ITEM",
  ItemLoginRequired: "ITEM_LOGIN_REQUIRED",
  PaymentProfileLoginRequired: "PAYMENT_PROFILE_LOGIN_REQUIRED",
  Error: "ERROR",
  MigratedAccountItem: "MIGRATED_ACCOUNT_ITEM",
  Admin: "ADMIN",
  Fraud: "FRAUD",
} as const;
export type TransferAuthorizationDecisionRationaleCode =
  | (typeof TransferAuthorizationDecisionRationaleCode)[keyof typeof TransferAuthorizationDecisionRationaleCode]
  | (string & {});

export const transferAuthorizationDecisionRationaleCodeSchema: EnumSchema<TransferAuthorizationDecisionRationaleCode> =
  s.enumOf<TransferAuthorizationDecisionRationaleCode>(TransferAuthorizationDecisionRationaleCode);
