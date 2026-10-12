import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  liabilitiesGetRequestOptionsSchema,
  type LiabilitiesGetRequestOptions,
} from "./liabilities-get-request-options.js";

/** LiabilitiesGetRequest defines the request schema for `/liabilities/get` */
export type LiabilitiesGetRequest = {
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
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
   */
  options?: LiabilitiesGetRequestOptions;
};

export const liabilitiesGetRequestSchema: Schema<LiabilitiesGetRequest> = s.object<LiabilitiesGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  options: s.optional(s.lazy(() => liabilitiesGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
