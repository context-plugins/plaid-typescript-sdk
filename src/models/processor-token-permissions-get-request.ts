import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorTokenPermissionsGetRequest defines the request schema for
 * `/processor/token/permissions/get`
 */
export type ProcessorTokenPermissionsGetRequest = {
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
  /**
   * The processor token obtained from the Plaid integration partner. Processor tokens are in the
   * format: `processor-<environment>-<identifier>`
   */
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
