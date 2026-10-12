import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxProcessorTokenCreateResponse defines the response schema for
 * `/sandbox/processor_token/create`
 */
export type SandboxProcessorTokenCreateResponse = {
  /** A processor token that can be used to call the `/processor/` endpoints. */
  processorToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
