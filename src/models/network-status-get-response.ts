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

export type NetworkStatusGetResponse = {
  networkStatus: NetworkStatusGetResponseNetworkStatus;
  layer?: NetworkStatusGetResponseLayer | null;
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
