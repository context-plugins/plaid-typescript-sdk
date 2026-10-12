import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ProcessorSignalPrepareResponse defines the response schema for `/processor/signal/prepare` */
export type ProcessorSignalPrepareResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorSignalPrepareResponseSchema: Schema<ProcessorSignalPrepareResponse> =
  s.object<ProcessorSignalPrepareResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
