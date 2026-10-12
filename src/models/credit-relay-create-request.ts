import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CreditRelayCreateRequest defines the request schema for `/credit/relay/create` */
export type CreditRelayCreateRequest = {
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
  /**
   * List of report token strings, with at most one token of each report type. Currently only Asset
   * Report token is supported.
   */
  reportTokens: string[];
  /**
   * The `secondary_client_id` is the client id of the third party with whom you would like to share
   * the relay token.
   */
  secondaryClientId: string;
  /**
   * URL to which Plaid will send webhooks when the Secondary Client successfully retrieves an Asset
   * Report by calling `/credit/relay/get`.
   */
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
