import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxIncomeWebhookFireRequestWebhookCodeSchema,
  type SandboxIncomeWebhookFireRequestWebhookCode,
} from "./sandbox-income-webhook-fire-request-webhook-code.js";
import { verificationStatus3Schema, type VerificationStatus3 } from "./verification-status3.js";

/** SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook` */
export type SandboxIncomeFireWebhookRequest = {
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
  /** The Item ID associated with the verification. */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /** The URL to which the webhook should be sent. */
  webhook: string;
  /**
   * `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification status processing has
   * completed. If the user uploaded multiple documents, this webhook will fire when all documents
   * have finished processing. Call the `/income/verification/paystubs/get` endpoint and check the
   * document metadata to see which documents were successfully parsed.
   *
   * `VERIFICATION_STATUS_PROCESSING_FAILED`: A failure occurred when attempting to process the
   * verification documentation.
   *
   * `VERIFICATION_STATUS_PENDING_APPROVAL`: (deprecated) The income verification has been sent to
   * the user for review.
   */
  verificationStatus?: VerificationStatus3;
  /** The webhook codes that can be fired by this test endpoint. */
  webhookCode: SandboxIncomeWebhookFireRequestWebhookCode;
};

export const sandboxIncomeFireWebhookRequestSchema: Schema<SandboxIncomeFireWebhookRequest> =
  s.object<SandboxIncomeFireWebhookRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    itemId: s.string(),
    userId: s.optional(s.string()),
    webhook: s.string(),
    verificationStatus: s.optional(s.lazy(() => verificationStatus3Schema)),
    webhookCode: sandboxIncomeWebhookFireRequestWebhookCodeSchema,
    _keysMap: {
      clientId: "client_id",
      itemId: "item_id",
      userId: "user_id",
      verificationStatus: "verification_status",
      webhookCode: "webhook_code",
    },
  });
