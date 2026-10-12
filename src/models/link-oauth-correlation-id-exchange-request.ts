import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * LinkOAuthCorrelationIdExchangeRequest defines the request schema for
 * `/link/oauth/correlation_id/exchange`
 */
export type LinkOAuthCorrelationIdExchangeRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** A `link_correlation_id` from a received OAuth redirect URI callback */
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
