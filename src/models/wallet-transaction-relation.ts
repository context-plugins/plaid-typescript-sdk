import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

/**
 * Transactions are related when they have a logical connection.
 *
 * For example, a `PAYOUT` transaction can be returned by the sender, creating a `RETURN`
 * transaction. Each `PAYOUT` transaction can have at most one corresponding `RETURN` transaction in
 * case of reversal.
 *
 * These relationships are bi-directional, meaning that both entities have references to each other.
 * For instance, when a transaction of type RETURN occurs, it is linked to the original transaction
 * being returned. Likewise, the original transaction has a reference back to the RETURN transaction
 * that represents the return.
 *
 * This field is only populated for transactions of type `RETURN`, `FUNDS_SWEEP`, `REFUND` and
 * `PAYOUT`.
 *
 * The relationship between a `PIS_PAY_IN` payment and its corresponding `REFUND` transactions is
 * only available through the `refund_ids` property in the payment object. See
 * [`/payment_initiation/payment/get`](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-get-response-refund-ids).
 */
export type WalletTransactionRelation = {
  /** The ID of the related transaction. */
  id?: string;
  /** The type of the transaction. */
  type?: Type4;
};

export const walletTransactionRelationSchema: Schema<WalletTransactionRelation> =
  s.object<WalletTransactionRelation>({
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => type4Schema)),
  });
