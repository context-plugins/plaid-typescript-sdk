import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/originator/create` */
export type TransferOriginatorCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The company name of the end customer being created. This will be displayed in public-facing
   * surfaces, e.g. Plaid Dashboard.
   */
  companyName: string;
};

export const transferOriginatorCreateRequestSchema: Schema<TransferOriginatorCreateRequest> =
  s.object<TransferOriginatorCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    companyName: s.string(),
    _keysMap: {
      clientId: "client_id",
      companyName: "company_name",
    },
  });
