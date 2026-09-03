import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProtectReportType = {
  UserAccountTakeover: "USER_ACCOUNT_TAKEOVER",
  FalseIdentity: "FALSE_IDENTITY",
  StolenIdentity: "STOLEN_IDENTITY",
  SyntheticIdentity: "SYNTHETIC_IDENTITY",
  MultipleUserAccounts: "MULTIPLE_USER_ACCOUNTS",
  ScamVictim: "SCAM_VICTIM",
  BankAccountTakeover: "BANK_ACCOUNT_TAKEOVER",
  BankConnectionRevoked: "BANK_CONNECTION_REVOKED",
  CardTesting: "CARD_TESTING",
  UnauthorizedTransaction: "UNAUTHORIZED_TRANSACTION",
  CardChargeback: "CARD_CHARGEBACK",
  AchReturn: "ACH_RETURN",
  Dispute: "DISPUTE",
  FirstPartyFraud: "FIRST_PARTY_FRAUD",
  MissedPayment: "MISSED_PAYMENT",
  LoanStacking: "LOAN_STACKING",
  MoneyLaundering: "MONEY_LAUNDERING",
  NoFraud: "NO_FRAUD",
  Other: "OTHER",
} as const;
export type ProtectReportType = (typeof ProtectReportType)[keyof typeof ProtectReportType] | (string & {});

export const protectReportTypeSchema: EnumSchema<ProtectReportType> =
  s.enumOf<ProtectReportType>(ProtectReportType);
