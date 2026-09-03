import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraCheckReportCreateResponse = {
  requestId?: string;
};

export const craCheckReportCreateResponseSchema: Schema<CraCheckReportCreateResponse> =
  s.object<CraCheckReportCreateResponse>({
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
