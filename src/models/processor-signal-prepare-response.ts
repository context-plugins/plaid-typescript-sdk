import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorSignalPrepareResponse = {
  requestId: string;
};

export const processorSignalPrepareResponseSchema: Schema<ProcessorSignalPrepareResponse> =
  s.object<ProcessorSignalPrepareResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
