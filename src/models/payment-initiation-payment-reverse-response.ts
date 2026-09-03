import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletTransactionStatusSchema, type WalletTransactionStatus } from "./wallet-transaction-status.js";

export type PaymentInitiationPaymentReverseResponse = {
  refundId: string;
  status: WalletTransactionStatus;
  requestId: string;
};

export const paymentInitiationPaymentReverseResponseSchema: Schema<PaymentInitiationPaymentReverseResponse> =
  s.object<PaymentInitiationPaymentReverseResponse>({
    refundId: s.string(),
    status: walletTransactionStatusSchema,
    requestId: s.string(),
    _keysMap: {
      refundId: "refund_id",
      requestId: "request_id",
    },
  });
