import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorTokenWebhookUpdateResponse defines the response schema for
 * `/processor/token/webhook/update`
 */
export type ProcessorTokenWebhookUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorTokenWebhookUpdateResponseSchema: Schema<ProcessorTokenWebhookUpdateResponse> =
  s.object<ProcessorTokenWebhookUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
