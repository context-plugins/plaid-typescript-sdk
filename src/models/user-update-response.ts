import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UserUpdateResponse defines the response schema for `/user/update` */
export type UserUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userUpdateResponseSchema: Schema<UserUpdateResponse> = s.object<UserUpdateResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
