import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorTokenWebhookUpdateRequest defines the request schema for
 * `/processor/token/webhook/update`
 */
export type ProcessorTokenWebhookUpdateRequest = {
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
  /**
   * The new webhook URL to associate with the processor token. To remove a webhook from a processor
   * token, set to `null`.
   */
  webhook: string | null;
};

export const processorTokenWebhookUpdateRequestSchema: Schema<ProcessorTokenWebhookUpdateRequest> =
  s.object<ProcessorTokenWebhookUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    webhook: s.nullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
