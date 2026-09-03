import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayCreateRequest = {
  clientId?: string;
  secret?: string;
  reportTokens: string[];
  secondaryClientId: string;
  webhook?: string | null;
};

export const creditRelayCreateRequestSchema: Schema<CreditRelayCreateRequest> =
  s.object<CreditRelayCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    reportTokens: s.array(s.string()),
    secondaryClientId: s.string(),
    webhook: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      reportTokens: "report_tokens",
      secondaryClientId: "secondary_client_id",
    },
  });
