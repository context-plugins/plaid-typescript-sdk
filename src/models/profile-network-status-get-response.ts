import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  networkStatusGetResponseNetworkStatusSchema,
  type NetworkStatusGetResponseNetworkStatus,
} from "./network-status-get-response-network-status.js";

export type ProfileNetworkStatusGetResponse = {
  networkStatus: NetworkStatusGetResponseNetworkStatus;
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
