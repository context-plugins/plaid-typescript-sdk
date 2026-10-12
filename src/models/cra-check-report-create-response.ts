import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CraCheckReportCreateResponse defines the response schema for `/cra/check_report/create`. */
export type CraCheckReportCreateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const craCheckReportCreateResponseSchema: Schema<CraCheckReportCreateResponse> =
  s.object<CraCheckReportCreateResponse>({
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
