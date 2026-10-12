import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SignalReturnReportResponse defines the response schema for `/signal/return/report` */
export type SignalReturnReportResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const signalReturnReportResponseSchema: Schema<SignalReturnReportResponse> =
  s.object<SignalReturnReportResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
