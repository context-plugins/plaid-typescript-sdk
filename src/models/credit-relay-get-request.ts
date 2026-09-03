import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayGetRequest = {
  clientId?: string;
  secret?: string;
  relayToken: string;
  reportType: "asset";
  includeInsights?: boolean;
};

export const creditRelayGetRequestSchema: Schema<CreditRelayGetRequest> = s.object<CreditRelayGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  relayToken: s.string(),
  reportType: s.literal("asset"),
  includeInsights: s.optional(s.boolean()),
  _keysMap: {
    clientId: "client_id",
    relayToken: "relay_token",
    reportType: "report_type",
    includeInsights: "include_insights",
  },
});
