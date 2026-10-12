import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IdentityRefreshResponse defines the response schema for `/identity/refresh` */
export type IdentityRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const identityRefreshResponseSchema: Schema<IdentityRefreshResponse> =
  s.object<IdentityRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
