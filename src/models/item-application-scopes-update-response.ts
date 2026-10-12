import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ItemApplicationScopesUpdateResponse defines the response schema for
 * `/item/application/scopes/update`
 */
export type ItemApplicationScopesUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemApplicationScopesUpdateResponseSchema: Schema<ItemApplicationScopesUpdateResponse> =
  s.object<ItemApplicationScopesUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
