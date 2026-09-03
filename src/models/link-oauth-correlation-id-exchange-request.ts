import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkOAuthCorrelationIdExchangeRequest = {
  clientId?: string;
  secret?: string;
  linkCorrelationId: string;
};

export const linkOAuthCorrelationIdExchangeRequestSchema: Schema<LinkOAuthCorrelationIdExchangeRequest> =
  s.object<LinkOAuthCorrelationIdExchangeRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    linkCorrelationId: s.string(),
    _keysMap: {
      clientId: "client_id",
      linkCorrelationId: "link_correlation_id",
    },
  });
