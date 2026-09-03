import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOriginatorGetRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
};

export const transferOriginatorGetRequestSchema: Schema<TransferOriginatorGetRequest> =
  s.object<TransferOriginatorGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
    },
  });
