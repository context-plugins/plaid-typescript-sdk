import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  processorBalanceGetRequestOptionsSchema,
  type ProcessorBalanceGetRequestOptions,
} from "./processor-balance-get-request-options.js";

export type ProcessorBalanceGetRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
  options?: ProcessorBalanceGetRequestOptions;
};

export const processorBalanceGetRequestSchema: Schema<ProcessorBalanceGetRequest> =
  s.object<ProcessorBalanceGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    options: s.optional(s.lazy(() => processorBalanceGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
