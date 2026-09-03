import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferTestClockAdvanceResponse = {
  requestId: string;
};

export const sandboxTransferTestClockAdvanceResponseSchema: Schema<SandboxTransferTestClockAdvanceResponse> =
  s.object<SandboxTransferTestClockAdvanceResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
