import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkStatusGetUserSchema, type NetworkStatusGetUser } from "./network-status-get-user.js";

/** NetworkStatusGetRequest defines the request schema for `/network/status/get` */
export type NetworkStatusGetRequest = {
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
  /** An object specifying information about the end user for the network status check. */
  user: NetworkStatusGetUser;
  /**
   * The id of a template defined in Plaid Dashboard. This field is used if you have additional
   * criteria that you want to check against (e.g. Layer eligibility).
   */
  templateId?: string;
};

export const networkStatusGetRequestSchema: Schema<NetworkStatusGetRequest> =
  s.object<NetworkStatusGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    user: networkStatusGetUserSchema,
    templateId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      templateId: "template_id",
    },
  });
