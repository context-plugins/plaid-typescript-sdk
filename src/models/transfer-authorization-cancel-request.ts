import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferAuthorizationCancelRequest = {
  clientId?: string;
  secret?: string;
  authorizationId: string;
};

export const transferAuthorizationCancelRequestSchema: Schema<TransferAuthorizationCancelRequest> =
  s.object<TransferAuthorizationCancelRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    authorizationId: s.string(),
    _keysMap: {
      clientId: "client_id",
      authorizationId: "authorization_id",
    },
  });
