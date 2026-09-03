import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxProcessorTokenCreateResponse = {
  processorToken: string;
  requestId: string;
};

export const sandboxProcessorTokenCreateResponseSchema: Schema<SandboxProcessorTokenCreateResponse> =
  s.object<SandboxProcessorTokenCreateResponse>({
    processorToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      processorToken: "processor_token",
      requestId: "request_id",
    },
  });
