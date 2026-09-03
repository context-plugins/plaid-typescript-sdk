import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalWarningSchema, type SignalWarning } from "./signal-warning.js";
import {
  transferAuthorizationRiskLevelSchema,
  type TransferAuthorizationRiskLevel,
} from "./transfer-authorization-risk-level.js";

export type TransferAuthorizationPaymentRisk = {
  bankInitiatedReturnScore: number | null;
  customerInitiatedReturnScore: number | null;
  riskLevel: TransferAuthorizationRiskLevel | null;
  warnings: SignalWarning[];
};

export const transferAuthorizationPaymentRiskSchema: Schema<TransferAuthorizationPaymentRisk> =
  s.object<TransferAuthorizationPaymentRisk>({
    bankInitiatedReturnScore: s.nullable(s.number()),
    customerInitiatedReturnScore: s.nullable(s.number()),
    riskLevel: s.nullable(s.lazy(() => transferAuthorizationRiskLevelSchema)),
    warnings: s.array(s.lazy(() => signalWarningSchema)),
    _keysMap: {
      bankInitiatedReturnScore: "bank_initiated_return_score",
      customerInitiatedReturnScore: "customer_initiated_return_score",
      riskLevel: "risk_level",
    },
  });
