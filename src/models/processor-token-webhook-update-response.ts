import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorTokenWebhookUpdateResponse = {
  requestId: string;
};

export const processorTokenWebhookUpdateResponseSchema: Schema<ProcessorTokenWebhookUpdateResponse> =
  s.object<ProcessorTokenWebhookUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
