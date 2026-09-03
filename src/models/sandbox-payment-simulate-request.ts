import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxPaymentSimulateRequest = {
  clientId?: string;
  secret?: string;
  paymentId: string;
  webhook: string;
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
