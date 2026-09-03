import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkStatusGetUserSchema, type NetworkStatusGetUser } from "./network-status-get-user.js";

export type ProfileNetworkStatusGetRequest = {
  clientId?: string;
  secret?: string;
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
