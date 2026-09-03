import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankInitiatedReturnRiskSchema, type BankInitiatedReturnRisk } from "./bank-initiated-return-risk.js";
import {
  customerInitiatedReturnRiskSchema,
  type CustomerInitiatedReturnRisk,
} from "./customer-initiated-return-risk.js";

export type SignalEvaluateScores = {
  customerInitiatedReturnRisk?: CustomerInitiatedReturnRisk;
  bankInitiatedReturnRisk?: BankInitiatedReturnRisk;
};

export const signalEvaluateScoresSchema: Schema<SignalEvaluateScores> = s.object<SignalEvaluateScores>({
  customerInitiatedReturnRisk: s.optional(s.lazy(() => customerInitiatedReturnRiskSchema)),
  bankInitiatedReturnRisk: s.optional(s.lazy(() => bankInitiatedReturnRiskSchema)),
  _keysMap: {
    customerInitiatedReturnRisk: "customer_initiated_return_risk",
    bankInitiatedReturnRisk: "bank_initiated_return_risk",
  },
});
