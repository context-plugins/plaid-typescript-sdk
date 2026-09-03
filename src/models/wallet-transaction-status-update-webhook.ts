import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  walletTransactionFailureReasonSchema,
  type WalletTransactionFailureReason,
} from "./wallet-transaction-failure-reason.js";
import { walletTransactionStatusSchema, type WalletTransactionStatus } from "./wallet-transaction-status.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type WalletTransactionStatusUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  transactionId: string;
  paymentId?: string | null;
  walletId?: string;
  newStatus: WalletTransactionStatus;
  oldStatus: WalletTransactionStatus;
  failureReason?: WalletTransactionFailureReason | null;
  timestamp: Date;
  error?: Error | null;
  environment: WebhookEnvironmentValues;
};

export const walletTransactionStatusUpdateWebhookSchema: Schema<WalletTransactionStatusUpdateWebhook> =
  s.object<WalletTransactionStatusUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    transactionId: s.string(),
    paymentId: s.optionalNullable(s.string()),
    walletId: s.optional(s.string()),
    newStatus: walletTransactionStatusSchema,
    oldStatus: walletTransactionStatusSchema,
    failureReason: s.optionalNullable(s.lazy(() => walletTransactionFailureReasonSchema)),
    timestamp: s.dateTime(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      transactionId: "transaction_id",
      paymentId: "payment_id",
      walletId: "wallet_id",
      newStatus: "new_status",
      oldStatus: "old_status",
      failureReason: "failure_reason",
    },
  });
