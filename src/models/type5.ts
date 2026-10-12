import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the transaction. The supported transaction types that are returned are:
 * `BANK_TRANSFER:` a transaction which credits an e-wallet through an external bank transfer.
 *
 * `PAYOUT:` a transaction which debits an e-wallet by disbursing funds to a counterparty.
 *
 * `PIS_PAY_IN:` a payment which credits an e-wallet through Plaid's Payment Initiation Services
 * (PIS) APIs. For more information see the [Payment Initiation
 * endpoints](https://plaid.com/docs/api/products/payment-initiation/).
 *
 * `REFUND:` a transaction which debits an e-wallet by refunding a previously initiated payment made
 * through Plaid's [PIS APIs](https://plaid.com/docs/api/products/payment-initiation/).
 *
 * `FUNDS_SWEEP`: an automated transaction which debits funds from an e-wallet to a designated
 * client-owned account.
 *
 * `RETURN`: an automated transaction where a debit transaction was reversed and money moved back to
 * originating account.
 *
 * `RECALL`: a transaction where the sending bank has requested the return of funds due to a fraud
 * claim, technical error, or other issue associated with the payment.
 *
 * `ACCOUNT_FUNDING`: an incoming transfer from an allowlisted account. Not automatically refunded.
 *
 * `AUTO_REFUND`: an outgoing refund automatically initiated by Plaid in response to an unexpected
 * `BANK_TRANSFER`.
 */
export const Type5 = {
  BankTransfer: "BANK_TRANSFER",
  Payout: "PAYOUT",
  PisPayIn: "PIS_PAY_IN",
  Refund: "REFUND",
  FundsSweep: "FUNDS_SWEEP",
  Return: "RETURN",
  Recall: "RECALL",
  AccountFunding: "ACCOUNT_FUNDING",
  AutoRefund: "AUTO_REFUND",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
