import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxIncomeWebhookFireRequestWebhookCodeSchema,
  type SandboxIncomeWebhookFireRequestWebhookCode,
} from "./sandbox-income-webhook-fire-request-webhook-code.js";
import { verificationStatus3Schema, type VerificationStatus3 } from "./verification-status3.js";

export type SandboxIncomeFireWebhookRequest = {
  clientId?: string;
  secret?: string;
  itemId: string;
  userId?: string;
  webhook: string;
  verificationStatus?: VerificationStatus3;
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
