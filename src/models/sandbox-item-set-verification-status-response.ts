import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxItemSetVerificationStatusResponse = {
  requestId: string;
};

export const sandboxItemSetVerificationStatusResponseSchema: Schema<SandboxItemSetVerificationStatusResponse> =
  s.object<SandboxItemSetVerificationStatusResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
