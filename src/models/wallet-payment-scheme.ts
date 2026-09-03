import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WalletPaymentScheme = {
  FasterPayments: "FASTER_PAYMENTS",
  SepaCreditTransfer: "SEPA_CREDIT_TRANSFER",
  SepaCreditTransferInstant: "SEPA_CREDIT_TRANSFER_INSTANT",
} as const;
export type WalletPaymentScheme =
  | (typeof WalletPaymentScheme)[keyof typeof WalletPaymentScheme]
  | (string & {});

export const walletPaymentSchemeSchema: EnumSchema<WalletPaymentScheme> =
  s.enumOf<WalletPaymentScheme>(WalletPaymentScheme);
