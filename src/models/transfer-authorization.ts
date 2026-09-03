import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationGuaranteeDetailsSchema,
  type AuthorizationGuaranteeDetails,
} from "./authorization-guarantee-details.js";
import {
  transferAuthorizationDecisionRationaleSchema,
  type TransferAuthorizationDecisionRationale,
} from "./transfer-authorization-decision-rationale.js";
import {
  transferAuthorizationDecisionSchema,
  type TransferAuthorizationDecision,
} from "./transfer-authorization-decision.js";
import {
  transferAuthorizationGuaranteeDecisionRationaleSchema,
  type TransferAuthorizationGuaranteeDecisionRationale,
} from "./transfer-authorization-guarantee-decision-rationale.js";
import {
  transferAuthorizationGuaranteeDecisionSchema,
  type TransferAuthorizationGuaranteeDecision,
} from "./transfer-authorization-guarantee-decision.js";
import {
  transferAuthorizationPaymentRiskSchema,
  type TransferAuthorizationPaymentRisk,
} from "./transfer-authorization-payment-risk.js";
import {
  transferAuthorizationProposedTransferSchema,
  type TransferAuthorizationProposedTransfer,
} from "./transfer-authorization-proposed-transfer.js";

export type TransferAuthorization = {
  id: string;
  created: Date;
  decision: TransferAuthorizationDecision;
  decisionRationale: TransferAuthorizationDecisionRationale | null;
  guaranteeDecision: TransferAuthorizationGuaranteeDecision | null;
  guaranteeDecisionRationale: TransferAuthorizationGuaranteeDecisionRationale | null;
  guaranteeDetails?: AuthorizationGuaranteeDetails | null;
  paymentRisk: TransferAuthorizationPaymentRisk | null;
  proposedTransfer: TransferAuthorizationProposedTransfer;
};

export const transferAuthorizationSchema: Schema<TransferAuthorization> = s.object<TransferAuthorization>({
  id: s.string(),
  created: s.dateTime(),
  decision: transferAuthorizationDecisionSchema,
  decisionRationale: s.nullable(s.lazy(() => transferAuthorizationDecisionRationaleSchema)),
  guaranteeDecision: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionSchema)),
  guaranteeDecisionRationale: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionRationaleSchema)),
  guaranteeDetails: s.optionalNullable(s.lazy(() => authorizationGuaranteeDetailsSchema)),
  paymentRisk: s.nullable(s.lazy(() => transferAuthorizationPaymentRiskSchema)),
  proposedTransfer: transferAuthorizationProposedTransferSchema,
  _keysMap: {
    decisionRationale: "decision_rationale",
    guaranteeDecision: "guarantee_decision",
    guaranteeDecisionRationale: "guarantee_decision_rationale",
    guaranteeDetails: "guarantee_details",
    paymentRisk: "payment_risk",
    proposedTransfer: "proposed_transfer",
  },
});
