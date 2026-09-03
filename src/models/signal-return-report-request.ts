import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalReturnReportRequest = {
  clientId?: string;
  secret?: string;
  clientTransactionId: string;
  returnCode: string;
  returnedAt?: Date | null;
};

export const signalReturnReportRequestSchema: Schema<SignalReturnReportRequest> =
  s.object<SignalReturnReportRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    clientTransactionId: s.string(),
    returnCode: s.string(),
    returnedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      clientId: "client_id",
      clientTransactionId: "client_transaction_id",
      returnCode: "return_code",
      returnedAt: "returned_at",
    },
  });
