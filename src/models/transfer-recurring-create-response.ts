import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recurringTransferNullableSchema,
  type RecurringTransferNullable,
} from "./recurring-transfer-nullable.js";
import {
  transferAuthorizationDecisionRationaleSchema,
  type TransferAuthorizationDecisionRationale,
} from "./transfer-authorization-decision-rationale.js";
import {
  transferAuthorizationDecisionSchema,
  type TransferAuthorizationDecision,
} from "./transfer-authorization-decision.js";

export type TransferRecurringCreateResponse = {
  recurringTransfer?: RecurringTransferNullable | null;
  decision: TransferAuthorizationDecision;
  decisionRationale?: TransferAuthorizationDecisionRationale | null;
  requestId: string;
};

export const transferRecurringCreateResponseSchema: Schema<TransferRecurringCreateResponse> =
  s.object<TransferRecurringCreateResponse>({
    recurringTransfer: s.optionalNullable(s.lazy(() => recurringTransferNullableSchema)),
    decision: transferAuthorizationDecisionSchema,
    decisionRationale: s.optionalNullable(s.lazy(() => transferAuthorizationDecisionRationaleSchema)),
    requestId: s.string(),
    _keysMap: {
      recurringTransfer: "recurring_transfer",
      decisionRationale: "decision_rationale",
      requestId: "request_id",
    },
  });
