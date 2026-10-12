import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SignalDecisionReportResponse defines the response schema for `/signal/decision/report` */
export type SignalDecisionReportResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const signalDecisionReportResponseSchema: Schema<SignalDecisionReportResponse> =
  s.object<SignalDecisionReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
