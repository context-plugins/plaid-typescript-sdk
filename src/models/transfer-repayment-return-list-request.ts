import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRepaymentReturnListRequest = {
  clientId?: string;
  secret?: string;
  repaymentId: string;
  count?: number | null;
  offset?: number;
};

export const transferRepaymentReturnListRequestSchema: Schema<TransferRepaymentReturnListRequest> =
  s.object<TransferRepaymentReturnListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    repaymentId: s.string(),
    count: s.optionalNullable(s.number()),
    offset: s.optional(s.number()),
    _keysMap: {
      clientId: "client_id",
      repaymentId: "repayment_id",
    },
  });
