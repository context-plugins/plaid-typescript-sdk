import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferAuthorizationDecisionRationaleSchema,
  type TransferAuthorizationDecisionRationale,
} from "./transfer-authorization-decision-rationale.js";
import {
  transferAuthorizationGuaranteeDecisionRationaleSchema,
  type TransferAuthorizationGuaranteeDecisionRationale,
} from "./transfer-authorization-guarantee-decision-rationale.js";
import {
  transferAuthorizationGuaranteeDecisionSchema,
  type TransferAuthorizationGuaranteeDecision,
} from "./transfer-authorization-guarantee-decision.js";
import {
  transferIntentAuthorizationDecisionSchema,
  type TransferIntentAuthorizationDecision,
} from "./transfer-intent-authorization-decision.js";
import {
  transferIntentCreateModeSchema,
  type TransferIntentCreateMode,
} from "./transfer-intent-create-mode.js";
import {
  transferIntentCreateNetworkSchema,
  type TransferIntentCreateNetwork,
} from "./transfer-intent-create-network.js";
import {
  transferIntentGetFailureReasonSchema,
  type TransferIntentGetFailureReason,
} from "./transfer-intent-get-failure-reason.js";
import { transferIntentStatusSchema, type TransferIntentStatus } from "./transfer-intent-status.js";
import { transferUserInResponseSchema, type TransferUserInResponse } from "./transfer-user-in-response.js";

export type TransferIntentGet = {
  id: string;
  created: Date;
  status: TransferIntentStatus;
  transferId: string | null;
  failureReason: TransferIntentGetFailureReason | null;
  authorizationDecision: TransferIntentAuthorizationDecision | null;
  authorizationDecisionRationale: TransferAuthorizationDecisionRationale | null;
  accountId?: string | null;
  originationAccountId: string;
  fundingAccountId: string;
  amount: string;
  mode: TransferIntentCreateMode;
  network?: TransferIntentCreateNetwork;
  achClass?: AchClass;
  user: TransferUserInResponse;
  description: string;
  metadata?: Record<string, string> | null;
  isoCurrencyCode: string;
  requireGuarantee?: boolean | null;
  guaranteeDecision: TransferAuthorizationGuaranteeDecision | null;
  guaranteeDecisionRationale: TransferAuthorizationGuaranteeDecisionRationale | null;
};

export const transferIntentGetSchema: Schema<TransferIntentGet> = s.object<TransferIntentGet>({
  id: s.string(),
  created: s.dateTime(),
  status: transferIntentStatusSchema,
  transferId: s.nullable(s.string()),
  failureReason: s.nullable(s.lazy(() => transferIntentGetFailureReasonSchema)),
  authorizationDecision: s.nullable(s.lazy(() => transferIntentAuthorizationDecisionSchema)),
  authorizationDecisionRationale: s.nullable(s.lazy(() => transferAuthorizationDecisionRationaleSchema)),
  accountId: s.optionalNullable(s.string()),
  originationAccountId: s.string(),
  fundingAccountId: s.string(),
  amount: s.string(),
  mode: transferIntentCreateModeSchema,
  network: s.optional(s.lazy(() => transferIntentCreateNetworkSchema)),
  achClass: s.optional(s.lazy(() => achClassSchema)),
  user: transferUserInResponseSchema,
  description: s.string(),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  isoCurrencyCode: s.string(),
  requireGuarantee: s.optionalNullable(s.boolean()),
  guaranteeDecision: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionSchema)),
  guaranteeDecisionRationale: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionRationaleSchema)),
  _keysMap: {
    transferId: "transfer_id",
    failureReason: "failure_reason",
    authorizationDecision: "authorization_decision",
    authorizationDecisionRationale: "authorization_decision_rationale",
    accountId: "account_id",
    originationAccountId: "origination_account_id",
    fundingAccountId: "funding_account_id",
    achClass: "ach_class",
    isoCurrencyCode: "iso_currency_code",
    requireGuarantee: "require_guarantee",
    guaranteeDecision: "guarantee_decision",
    guaranteeDecisionRationale: "guarantee_decision_rationale",
  },
});
