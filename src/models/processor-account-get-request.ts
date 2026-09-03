import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorAccountGetRequest = {
  clientId?: string;
  processorToken: string;
  secret?: string;
};

export const processorAccountGetRequestSchema: Schema<ProcessorAccountGetRequest> =
  s.object<ProcessorAccountGetRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
