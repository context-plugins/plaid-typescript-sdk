import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorSignalReturnReportResponse defines the response schema for
 * `/processor/signal/return/report`
 */
export type ProcessorSignalReturnReportResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorSignalReturnReportResponseSchema: Schema<ProcessorSignalReturnReportResponse> =
  s.object<ProcessorSignalReturnReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
