import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserRemoveResponse defines the response schema for `/user/remove` */
export type UserRemoveResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userRemoveResponseSchema: Schema<UserRemoveResponse> = s.object<UserRemoveResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
