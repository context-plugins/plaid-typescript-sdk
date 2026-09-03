import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorTokenPermissionsGetRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
};

export const processorTokenPermissionsGetRequestSchema: Schema<ProcessorTokenPermissionsGetRequest> =
  s.object<ProcessorTokenPermissionsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
