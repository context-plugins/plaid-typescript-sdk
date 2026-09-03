import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxPaymentProfileResetLoginResponse = {
  resetLogin: boolean;
  requestId: string;
};

export const sandboxPaymentProfileResetLoginResponseSchema: Schema<SandboxPaymentProfileResetLoginResponse> =
  s.object<SandboxPaymentProfileResetLoginResponse>({
    resetLogin: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      resetLogin: "reset_login",
      requestId: "request_id",
    },
  });
