import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserIdentityRemoveResponse defines the response schema for `/user/identity/remove` */
export type UserIdentityRemoveResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userIdentityRemoveResponseSchema: Schema<UserIdentityRemoveResponse> =
  s.object<UserIdentityRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
