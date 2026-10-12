import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CreditRelayRefreshResponse defines the response schema for `/credit/relay/refresh` */
export type CreditRelayRefreshResponse = {
  relayToken: string;
  /**
   * A unique ID identifying an Asset Report. Like all Plaid identifiers, this ID is case sensitive.
   */
  assetReportId?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
