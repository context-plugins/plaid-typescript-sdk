import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxProcessorTokenCreateRequestOptionsSchema,
  type SandboxProcessorTokenCreateRequestOptions,
} from "./sandbox-processor-token-create-request-options.js";

/**
 * SandboxProcessorTokenCreateRequest defines the request schema for
 * `/sandbox/processor_token/create`
 */
export type SandboxProcessorTokenCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The ID of the institution the Item will be associated with */
  institutionId: string;
  /**
   * An optional set of options to be used when configuring the Item. If specified, must not be
   * `null`.
   */
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
