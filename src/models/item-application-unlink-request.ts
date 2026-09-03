import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemApplicationUnlinkRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  applicationId: string;
};

export const itemApplicationUnlinkRequestSchema: Schema<ItemApplicationUnlinkRequest> =
  s.object<ItemApplicationUnlinkRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    applicationId: s.string(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      applicationId: "application_id",
    },
  });
