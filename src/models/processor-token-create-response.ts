import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorTokenCreateResponse = {
  processorToken: string;
  requestId: string;
};

export const processorTokenCreateResponseSchema: Schema<ProcessorTokenCreateResponse> =
  s.object<ProcessorTokenCreateResponse>({
    processorToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      processorToken: "processor_token",
      requestId: "request_id",
    },
  });
