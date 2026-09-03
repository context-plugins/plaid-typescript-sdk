import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxUserResetLoginResponse = {
  requestId: string;
};

export const sandboxUserResetLoginResponseSchema: Schema<SandboxUserResetLoginResponse> =
  s.object<SandboxUserResetLoginResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
