import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/originator/list` */
export type TransferOriginatorListRequest = {
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
  /** The maximum number of originators to return. @default 25 */
  count?: number | null;
  /** The number of originators to skip before returning results. @default 0 */
  offset?: number | null;
};

export const transferOriginatorListRequestSchema: Schema<TransferOriginatorListRequest> =
  s.object<TransferOriginatorListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.nullable(s.int()), 0),
    _keysMap: {
      clientId: "client_id",
    },
  });
