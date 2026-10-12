import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the overall network status of the user. */
export const NetworkStatusGetResponseNetworkStatus = {
  Unknown: "UNKNOWN",
  ReturningUser: "RETURNING_USER",
} as const;
export type NetworkStatusGetResponseNetworkStatus =
  | (typeof NetworkStatusGetResponseNetworkStatus)[keyof typeof NetworkStatusGetResponseNetworkStatus]
  | (string & {});

export const networkStatusGetResponseNetworkStatusSchema: EnumSchema<NetworkStatusGetResponseNetworkStatus> =
  s.enumOf<NetworkStatusGetResponseNetworkStatus>(NetworkStatusGetResponseNetworkStatus);
