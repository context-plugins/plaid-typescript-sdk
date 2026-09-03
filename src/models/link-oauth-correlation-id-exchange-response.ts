import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkOAuthCorrelationIdExchangeResponse = {
  linkToken: string;
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
