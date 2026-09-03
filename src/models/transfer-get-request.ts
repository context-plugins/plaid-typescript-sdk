import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferGetRequest = {
  clientId?: string;
  secret?: string;
  transferId?: string;
  authorizationId?: string;
  originatorClientId?: string | null;
};

export const transferGetRequestSchema: Schema<TransferGetRequest> = s.object<TransferGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  transferId: s.optional(s.string()),
  authorizationId: s.optional(s.string()),
  originatorClientId: s.optionalNullable(s.string()),
  _keysMap: {
    clientId: "client_id",
    transferId: "transfer_id",
    authorizationId: "authorization_id",
    originatorClientId: "originator_client_id",
  },
});
