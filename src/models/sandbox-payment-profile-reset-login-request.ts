import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxPaymentProfileResetLoginRequest = {
  clientId?: string;
  secret?: string;
  paymentProfileToken: string;
};

export const sandboxPaymentProfileResetLoginRequestSchema: Schema<SandboxPaymentProfileResetLoginRequest> =
  s.object<SandboxPaymentProfileResetLoginRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    paymentProfileToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
