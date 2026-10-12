import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SandboxPaymentSimulateRequest defines the request schema for `/sandbox/payment/simulate` */
export type SandboxPaymentSimulateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The ID of the payment to simulate */
  paymentId: string;
  /** The webhook url to use for any payment events triggered by the simulated status change. */
  webhook: string;
  /**
   * The status to set the payment to.
   *
   * Valid statuses include:
   * - `PAYMENT_STATUS_INITIATED`
   * - `PAYMENT_STATUS_INSUFFICIENT_FUNDS`
   * - `PAYMENT_STATUS_FAILED`
   * - `PAYMENT_STATUS_EXECUTED`
   * - `PAYMENT_STATUS_SETTLED`
   * - `PAYMENT_STATUS_CANCELLED`
   * - `PAYMENT_STATUS_REJECTED`
   */
  status: string;
};

export const sandboxPaymentSimulateRequestSchema: Schema<SandboxPaymentSimulateRequest> =
  s.object<SandboxPaymentSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentId: s.string(),
    webhook: s.string(),
    status: s.string(),
    _keysMap: {
      clientId: "client_id",
      paymentId: "payment_id",
    },
  });
