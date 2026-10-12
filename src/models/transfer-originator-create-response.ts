import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/originator/create` */
export type TransferOriginatorCreateResponse = {
  /**
   * Client ID of the originator. This identifier will be used when creating transfers and should be
   * stored associated with end user information.
   */
  originatorClientId: string;
  /** The company name of the end customer. */
  companyName: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferOriginatorCreateResponseSchema: Schema<TransferOriginatorCreateResponse> =
  s.object<TransferOriginatorCreateResponse>({
    originatorClientId: s.string(),
    companyName: s.string(),
    requestId: s.string(),
    _keysMap: {
      originatorClientId: "originator_client_id",
      companyName: "company_name",
      requestId: "request_id",
    },
  });
