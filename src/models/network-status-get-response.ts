import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  networkStatusGetResponseLayerSchema,
  type NetworkStatusGetResponseLayer,
} from "./network-status-get-response-layer.js";
import {
  networkStatusGetResponseNetworkStatusSchema,
  type NetworkStatusGetResponseNetworkStatus,
} from "./network-status-get-response-network-status.js";

/** NetworkStatusGetResponse defines the response schema for `/network/status/get` */
export type NetworkStatusGetResponse = {
  /** Enum representing the overall network status of the user. */
  networkStatus: NetworkStatusGetResponseNetworkStatus;
  /** An object representing Layer-related metadata for the requested user. */
  layer?: NetworkStatusGetResponseLayer | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const networkStatusGetResponseSchema: Schema<NetworkStatusGetResponse> =
  s.object<NetworkStatusGetResponse>({
    networkStatus: networkStatusGetResponseNetworkStatusSchema,
    layer: s.optionalNullable(s.lazy(() => networkStatusGetResponseLayerSchema)),
    requestId: s.string(),
    _keysMap: {
      networkStatus: "network_status",
      requestId: "request_id",
    },
  });
