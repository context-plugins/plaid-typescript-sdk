import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxProcessorTokenCreateRequestOptionsSchema,
  type SandboxProcessorTokenCreateRequestOptions,
} from "./sandbox-processor-token-create-request-options.js";

export type SandboxProcessorTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  institutionId: string;
  options?: SandboxProcessorTokenCreateRequestOptions;
};

export const sandboxProcessorTokenCreateRequestSchema: Schema<SandboxProcessorTokenCreateRequest> =
  s.object<SandboxProcessorTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    institutionId: s.string(),
    options: s.optional(s.lazy(() => sandboxProcessorTokenCreateRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      institutionId: "institution_id",
    },
  });
