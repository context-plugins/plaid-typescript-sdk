import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayRefreshRequest = {
  clientId?: string;
  secret?: string;
  relayToken: string;
  reportType: "asset";
  webhook?: string | null;
};

export const creditRelayRefreshRequestSchema: Schema<CreditRelayRefreshRequest> =
  s.object<CreditRelayRefreshRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    relayToken: s.string(),
    reportType: s.literal("asset"),
    webhook: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      relayToken: "relay_token",
      reportType: "report_type",
    },
  });
