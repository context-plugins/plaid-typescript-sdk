import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOriginatorListRequest = {
  clientId?: string;
  secret?: string;
  count?: number | null;
  offset?: number | null;
};

export const transferOriginatorListRequestSchema: Schema<TransferOriginatorListRequest> =
  s.object<TransferOriginatorListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    count: s.optionalNullable(s.number()),
    offset: s.optionalNullable(s.number()),
    _keysMap: {
      clientId: "client_id",
    },
  });
