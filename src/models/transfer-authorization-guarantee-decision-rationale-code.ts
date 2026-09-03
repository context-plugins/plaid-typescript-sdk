import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferAuthorizationGuaranteeDecisionRationaleCode = {
  ReturnBank: "RETURN_BANK",
  ReturnCustomer: "RETURN_CUSTOMER",
  GuaranteeLimitReached: "GUARANTEE_LIMIT_REACHED",
  RiskEstimateUnavailable: "RISK_ESTIMATE_UNAVAILABLE",
  RequiredParamMissing: "REQUIRED_PARAM_MISSING",
} as const;
export type TransferAuthorizationGuaranteeDecisionRationaleCode =
  | (typeof TransferAuthorizationGuaranteeDecisionRationaleCode)[keyof typeof TransferAuthorizationGuaranteeDecisionRationaleCode]
  | (string & {});

export const transferAuthorizationGuaranteeDecisionRationaleCodeSchema: EnumSchema<TransferAuthorizationGuaranteeDecisionRationaleCode> =
  s.enumOf<TransferAuthorizationGuaranteeDecisionRationaleCode>(
    TransferAuthorizationGuaranteeDecisionRationaleCode,
  );
