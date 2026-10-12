import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkStatusGetUserSchema, type NetworkStatusGetUser } from "./network-status-get-user.js";

/** ProfileNetworkStatusGetRequest defines the request schema for `/profile/network_status/get` */
export type ProfileNetworkStatusGetRequest = {
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
};

export const profileNetworkStatusGetRequestSchema: Schema<ProfileNetworkStatusGetRequest> =
  s.object<ProfileNetworkStatusGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    user: networkStatusGetUserSchema,
    _keysMap: {
      clientId: "client_id",
    },
  });
