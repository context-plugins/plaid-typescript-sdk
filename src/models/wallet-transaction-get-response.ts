import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { type5Schema, type Type5 } from "./type5.js";
import { walletPaymentSchemeSchema, type WalletPaymentScheme } from "./wallet-payment-scheme.js";
import { walletTransactionAmountSchema, type WalletTransactionAmount } from "./wallet-transaction-amount.js";
import {
  walletTransactionCounterpartySchema,
  type WalletTransactionCounterparty,
} from "./wallet-transaction-counterparty.js";
import {
  walletTransactionFailureReasonSchema,
  type WalletTransactionFailureReason,
} from "./wallet-transaction-failure-reason.js";
import {
  walletTransactionPayeeVerificationStatusSchema,
  type WalletTransactionPayeeVerificationStatus,
} from "./wallet-transaction-payee-verification-status.js";
import {
  walletTransactionRelationSchema,
  type WalletTransactionRelation,
} from "./wallet-transaction-relation.js";
import { walletTransactionStatusSchema, type WalletTransactionStatus } from "./wallet-transaction-status.js";

export type WalletTransactionGetResponse = {
  transactionId: string;
  walletId: string;
  reference: string;
  type: Type5;
  scheme?: WalletPaymentScheme | null;
  amount: WalletTransactionAmount;
  counterparty: WalletTransactionCounterparty;
  status: WalletTransactionStatus;
  createdAt: Date;
  lastStatusUpdate: Date;
  payeeVerificationStatus?: WalletTransactionPayeeVerificationStatus | null;
  paymentId?: string | null;
  failureReason?: WalletTransactionFailureReason | null;
  error?: Error | null;
  relatedTransactions?: WalletTransactionRelation[];
  requestId: string;
};

export const walletTransactionGetResponseSchema: Schema<WalletTransactionGetResponse> =
  s.object<WalletTransactionGetResponse>({
    transactionId: s.string(),
    walletId: s.string(),
    reference: s.string(),
    type: type5Schema,
    scheme: s.optionalNullable(s.lazy(() => walletPaymentSchemeSchema)),
    amount: walletTransactionAmountSchema,
    counterparty: walletTransactionCounterpartySchema,
    status: walletTransactionStatusSchema,
    createdAt: s.dateTime(),
    lastStatusUpdate: s.dateTime(),
    payeeVerificationStatus: s.optionalNullable(s.lazy(() => walletTransactionPayeeVerificationStatusSchema)),
    paymentId: s.optionalNullable(s.string()),
    failureReason: s.optionalNullable(s.lazy(() => walletTransactionFailureReasonSchema)),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    relatedTransactions: s.optional(s.array(s.lazy(() => walletTransactionRelationSchema))),
    requestId: s.string(),
    _keysMap: {
      transactionId: "transaction_id",
      walletId: "wallet_id",
      createdAt: "created_at",
      lastStatusUpdate: "last_status_update",
      payeeVerificationStatus: "payee_verification_status",
      paymentId: "payment_id",
      failureReason: "failure_reason",
      relatedTransactions: "related_transactions",
      requestId: "request_id",
    },
  });
