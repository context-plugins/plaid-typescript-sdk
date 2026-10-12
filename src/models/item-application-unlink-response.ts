import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemApplicationUnlinkResponse defines the response schema for `/item/application/unlink` */
export type ItemApplicationUnlinkResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemApplicationUnlinkResponseSchema: Schema<ItemApplicationUnlinkResponse> =
  s.object<ItemApplicationUnlinkResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
