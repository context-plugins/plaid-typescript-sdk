import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayPdfGetRequest = {
  clientId?: string;
  secret?: string;
  relayToken: string;
  reportType: "asset";
};

export const creditRelayPdfGetRequestSchema: Schema<CreditRelayPdfGetRequest> =
  s.object<CreditRelayPdfGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    relayToken: s.string(),
    reportType: s.literal("asset"),
    _keysMap: {
      clientId: "client_id",
      relayToken: "relay_token",
      reportType: "report_type",
    },
  });
