import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorTokenCreateResponse defines the response schema for `/processor/token/create` and
 * `/processor/apex/processor_token/create`
 */
export type ProcessorTokenCreateResponse = {
  /** The `processor_token` that can then be used by the Plaid partner to make API requests */
  processorToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
