import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/sandbox/bank_transfer/fire_webhook` */
export type SandboxBankTransferFireWebhookResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxBankTransferFireWebhookResponseSchema: Schema<SandboxBankTransferFireWebhookResponse> =
  s.object<SandboxBankTransferFireWebhookResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
