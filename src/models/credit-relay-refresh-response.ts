import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayRefreshResponse = {
  relayToken: string;
  assetReportId?: string;
  requestId: string;
};

export const creditRelayRefreshResponseSchema: Schema<CreditRelayRefreshResponse> =
  s.object<CreditRelayRefreshResponse>({
    relayToken: s.string(),
    assetReportId: s.optional(s.string()),
    requestId: s.string(),
    _keysMap: {
      relayToken: "relay_token",
      assetReportId: "asset_report_id",
      requestId: "request_id",
    },
  });
