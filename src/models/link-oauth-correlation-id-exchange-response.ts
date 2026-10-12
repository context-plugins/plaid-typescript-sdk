import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * LinkOAuthCorrelationIdExchangeResponse defines the response schema for
 * `/link/oauth/correlation_id/exchange`
 */
export type LinkOAuthCorrelationIdExchangeResponse = {
  /**
   * The `link_token` associated to the given `link_correlation_id`, which can be used to
   * re-initialize Link.
   */
  linkToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const linkOAuthCorrelationIdExchangeResponseSchema: Schema<LinkOAuthCorrelationIdExchangeResponse> =
  s.object<LinkOAuthCorrelationIdExchangeResponse>({
    linkToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      linkToken: "link_token",
      requestId: "request_id",
    },
  });
