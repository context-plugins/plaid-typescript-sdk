import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorSignalReturnReportRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
  clientTransactionId: string;
  returnCode: string;
  returnedAt?: Date | null;
};

export const processorSignalReturnReportRequestSchema: Schema<ProcessorSignalReturnReportRequest> =
  s.object<ProcessorSignalReturnReportRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    clientTransactionId: s.string(),
    returnCode: s.string(),
    returnedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
      clientTransactionId: "client_transaction_id",
      returnCode: "return_code",
      returnedAt: "returned_at",
    },
  });
