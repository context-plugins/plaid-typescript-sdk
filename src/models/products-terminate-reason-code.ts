import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductsTerminateReasonCode = {
  FraudFirstParty: "FRAUD_FIRST_PARTY",
  FraudFalseIdentity: "FRAUD_FALSE_IDENTITY",
  FraudAbuse: "FRAUD_ABUSE",
  FraudOther: "FRAUD_OTHER",
  FraudTransaction: "FRAUD_TRANSACTION",
  ConsumerLoanPaidOff: "CONSUMER_LOAN_PAID_OFF",
  ConsumerAccountClosed: "CONSUMER_ACCOUNT_CLOSED",
  ConsumerChargeOff: "CONSUMER_CHARGE_OFF",
  ConsumerPaymentMethodSwitched: "CONSUMER_PAYMENT_METHOD_SWITCHED",
  UserOffboarding: "USER_OFFBOARDING",
  DuplicateItem: "DUPLICATE_ITEM",
  BillingTermination: "BILLING_TERMINATION",
  Other: "OTHER",
} as const;
export type ProductsTerminateReasonCode =
  | (typeof ProductsTerminateReasonCode)[keyof typeof ProductsTerminateReasonCode]
  | (string & {});

export const productsTerminateReasonCodeSchema: EnumSchema<ProductsTerminateReasonCode> =
  s.enumOf<ProductsTerminateReasonCode>(ProductsTerminateReasonCode);
