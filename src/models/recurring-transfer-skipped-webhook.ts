import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferAuthorizationDecisionRationaleCodeSchema,
  type TransferAuthorizationDecisionRationaleCode,
} from "./transfer-authorization-decision-rationale-code.js";
import {
  transferAuthorizationDecisionSchema,
  type TransferAuthorizationDecision,
} from "./transfer-authorization-decision.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type RecurringTransferSkippedWebhook = {
  webhookType: string;
  webhookCode: string;
  recurringTransferId: string;
  authorizationDecision: TransferAuthorizationDecision;
  authorizationDecisionRationaleCode?: TransferAuthorizationDecisionRationaleCode | null;
  skippedOriginationDate: string;
  environment: WebhookEnvironmentValues;
};

export const recurringTransferSkippedWebhookSchema: Schema<RecurringTransferSkippedWebhook> =
  s.object<RecurringTransferSkippedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    recurringTransferId: s.string(),
    authorizationDecision: transferAuthorizationDecisionSchema,
    authorizationDecisionRationaleCode: s.optionalNullable(
      s.lazy(() => transferAuthorizationDecisionRationaleCodeSchema),
    ),
    skippedOriginationDate: s.dateOnly(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      recurringTransferId: "recurring_transfer_id",
      authorizationDecision: "authorization_decision",
      authorizationDecisionRationaleCode: "authorization_decision_rationale_code",
      skippedOriginationDate: "skipped_origination_date",
    },
  });
