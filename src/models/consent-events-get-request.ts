import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConsentEventsGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
};

export const consentEventsGetRequestSchema: Schema<ConsentEventsGetRequest> =
  s.object<ConsentEventsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
