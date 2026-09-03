import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferEventSyncRequest = {
  clientId?: string;
  secret?: string;
  afterId: number;
  count?: number | null;
};

export const transferEventSyncRequestSchema: Schema<TransferEventSyncRequest> =
  s.object<TransferEventSyncRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    afterId: s.number(),
    count: s.optionalNullable(s.number()),
    _keysMap: {
      clientId: "client_id",
      afterId: "after_id",
    },
  });
