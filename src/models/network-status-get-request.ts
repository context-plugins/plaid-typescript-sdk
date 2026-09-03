import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkStatusGetUserSchema, type NetworkStatusGetUser } from "./network-status-get-user.js";

export type NetworkStatusGetRequest = {
  clientId?: string;
  secret?: string;
  user: NetworkStatusGetUser;
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
