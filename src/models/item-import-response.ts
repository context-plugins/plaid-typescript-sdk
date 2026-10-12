import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ItemImportResponse defines the response schema for `/item/import` */
export type ItemImportResponse = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemImportResponseSchema: Schema<ItemImportResponse> = s.object<ItemImportResponse>({
  accessToken: s.string(),
  requestId: s.string(),
  _keysMap: {
    accessToken: "access_token",
    requestId: "request_id",
  },
});
