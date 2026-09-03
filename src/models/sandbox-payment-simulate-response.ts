import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationPaymentStatusSchema,
  type PaymentInitiationPaymentStatus,
} from "./payment-initiation-payment-status.js";

export type SandboxPaymentSimulateResponse = {
  requestId: string;
  oldStatus: PaymentInitiationPaymentStatus;
  newStatus: PaymentInitiationPaymentStatus;
};

export const sandboxPaymentSimulateResponseSchema: Schema<SandboxPaymentSimulateResponse> =
  s.object<SandboxPaymentSimulateResponse>({
    requestId: s.string(),
    oldStatus: paymentInitiationPaymentStatusSchema,
    newStatus: paymentInitiationPaymentStatusSchema,
    _keysMap: {
      requestId: "request_id",
      oldStatus: "old_status",
      newStatus: "new_status",
    },
  });
