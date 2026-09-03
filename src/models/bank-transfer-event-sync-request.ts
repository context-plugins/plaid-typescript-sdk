import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferEventSyncRequest = {
  clientId?: string;
  secret?: string;
  afterId: number;
  count?: number | null;
};

export const bankTransferEventSyncRequestSchema: Schema<BankTransferEventSyncRequest> =
  s.object<BankTransferEventSyncRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    afterId: s.number(),
    count: s.optionalNullable(s.number()),
    _keysMap: {
      clientId: "client_id",
      afterId: "after_id",
    },
  });
