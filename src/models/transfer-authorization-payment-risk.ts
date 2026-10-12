import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalWarningSchema, type SignalWarning } from "./signal-warning.js";
import {
  transferAuthorizationRiskLevelSchema,
  type TransferAuthorizationRiskLevel,
} from "./transfer-authorization-risk-level.js";

/**
 * This object includes the scores and risk level. This response is offered as an add-on to
 * `/transfer/authorization/create`. To request access to these fields, please contact your Plaid
 * account manager.
 */
export type TransferAuthorizationPaymentRisk = {
  /**
   * A score from 1-99 that indicates the transaction return risk: a higher risk score suggests a
   * higher return likelihood.
   *
   * The score evaluates the transaction return risk because an account is overdrawn or because an
   * ineligible account is used and covers return codes: "R01", "R02", "R03", "R04", "R06", "R08",
   * "R09", "R13", "R16", "R17", "R20", "R23". These returns have a turnaround time of 2 banking
   * days.
   */
  bankInitiatedReturnScore: number | null;
  /**
   * A score from 1-99 that indicates the transaction return risk: a higher risk score suggests a
   * higher return likelihood.
   *
   * The score evaluates the transaction return risk of an unauthorized debit and covers return
   * codes: "R05", "R07", "R10", "R11", "R29". These returns typically have a return time frame of
   * up to 60 calendar days. During this period, customers of financial institutions can dispute a
   * transaction as unauthorized.
   */
  customerInitiatedReturnScore: number | null;
  /**
   * Comprises five risk categories (high risk, medium-high risk, medium risk, medium-low risk, low
   * risk) based on the probability of return
   */
  riskLevel: TransferAuthorizationRiskLevel | null;
  /**
   * If bank information was not available to be used, this array contains warnings describing why
   * bank data is missing. If you want to receive an API error instead of scores in the case of
   * missing bank data, file a support ticket or contact your Plaid account manager.
   */
  warnings: SignalWarning[];
};

export const transferAuthorizationPaymentRiskSchema: Schema<TransferAuthorizationPaymentRisk> =
  s.object<TransferAuthorizationPaymentRisk>({
    bankInitiatedReturnScore: s.nullable(s.int()),
    customerInitiatedReturnScore: s.nullable(s.int()),
    riskLevel: s.nullable(s.lazy(() => transferAuthorizationRiskLevelSchema)),
    warnings: s.array(s.lazy(() => signalWarningSchema)),
    _keysMap: {
      bankInitiatedReturnScore: "bank_initiated_return_score",
      customerInitiatedReturnScore: "customer_initiated_return_score",
      riskLevel: "risk_level",
    },
  });
