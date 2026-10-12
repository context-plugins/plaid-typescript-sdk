import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorSignalDecisionReportResponse defines the response schema for
 * `/processor/signal/decision/report`
 */
export type ProcessorSignalDecisionReportResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorSignalDecisionReportResponseSchema: Schema<ProcessorSignalDecisionReportResponse> =
  s.object<ProcessorSignalDecisionReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
