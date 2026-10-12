import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxPublicTokenCreateResponse defines the response schema for `/sandbox/public_token/create`
 */
export type SandboxPublicTokenCreateResponse = {
  /**
   * A public token that can be exchanged for an access token using `/item/public_token/exchange`
   */
  publicToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxPublicTokenCreateResponseSchema: Schema<SandboxPublicTokenCreateResponse> =
  s.object<SandboxPublicTokenCreateResponse>({
    publicToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      publicToken: "public_token",
      requestId: "request_id",
    },
  });
