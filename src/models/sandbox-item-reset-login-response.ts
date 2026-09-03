import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxItemResetLoginResponse = {
  resetLogin: boolean;
  requestId: string;
};

export const sandboxItemResetLoginResponseSchema: Schema<SandboxItemResetLoginResponse> =
  s.object<SandboxItemResetLoginResponse>({
    resetLogin: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      resetLogin: "reset_login",
      requestId: "request_id",
    },
  });
