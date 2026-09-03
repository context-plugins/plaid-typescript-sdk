import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferIntentGetRequest = {
  clientId?: string;
  secret?: string;
  transferIntentId: string;
};

export const transferIntentGetRequestSchema: Schema<TransferIntentGetRequest> =
  s.object<TransferIntentGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    transferIntentId: s.string(),
    _keysMap: {
      clientId: "client_id",
      transferIntentId: "transfer_intent_id",
    },
  });
