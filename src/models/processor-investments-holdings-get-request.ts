import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorInvestmentsHoldingsGetRequest = {
  clientId?: string;
  processorToken: string;
  secret?: string;
};

export const processorInvestmentsHoldingsGetRequestSchema: Schema<ProcessorInvestmentsHoldingsGetRequest> =
  s.object<ProcessorInvestmentsHoldingsGetRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
