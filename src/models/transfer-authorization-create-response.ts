import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferAuthorizationSchema, type TransferAuthorization } from "./transfer-authorization.js";

/** Defines the response schema for `/transfer/authorization/create` */
export type TransferAuthorizationCreateResponse = {
  /** Contains the authorization decision for a proposed transfer. */
  authorization: TransferAuthorization;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferAuthorizationCreateResponseSchema: Schema<TransferAuthorizationCreateResponse> =
  s.object<TransferAuthorizationCreateResponse>({
    authorization: transferAuthorizationSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
