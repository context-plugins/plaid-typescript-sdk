import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashFlowUpdatesEventWebhookCodesSchema,
  type CashFlowUpdatesEventWebhookCodes,
} from "./cash-flow-updates-event-webhook-codes.js";

export type SandboxCraCashflowUpdatesUpdateRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  webhookCodes?: CashFlowUpdatesEventWebhookCodes[] | null;
  userId?: string;
};

export const sandboxCraCashflowUpdatesUpdateRequestSchema: Schema<SandboxCraCashflowUpdatesUpdateRequest> =
  s.object<SandboxCraCashflowUpdatesUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    webhookCodes: s.optionalNullable(s.array(s.lazy(() => cashFlowUpdatesEventWebhookCodesSchema))),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      webhookCodes: "webhook_codes",
      userId: "user_id",
    },
  });
