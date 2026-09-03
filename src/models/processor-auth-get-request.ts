import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorAuthGetRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
};

export const processorAuthGetRequestSchema: Schema<ProcessorAuthGetRequest> =
  s.object<ProcessorAuthGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
