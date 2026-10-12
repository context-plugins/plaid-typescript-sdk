import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  networkStatusGetResponseNetworkStatusSchema,
  type NetworkStatusGetResponseNetworkStatus,
} from "./network-status-get-response-network-status.js";

/** ProfileNetworkStatusGetResponse defines the response schema for `/profile/network_status/get` */
export type ProfileNetworkStatusGetResponse = {
  /** Enum representing the overall network status of the user. */
  networkStatus: NetworkStatusGetResponseNetworkStatus;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const profileNetworkStatusGetResponseSchema: Schema<ProfileNetworkStatusGetResponse> =
  s.object<ProfileNetworkStatusGetResponse>({
    networkStatus: networkStatusGetResponseNetworkStatusSchema,
    requestId: s.string(),
    _keysMap: {
      networkStatus: "network_status",
      requestId: "request_id",
    },
  });
