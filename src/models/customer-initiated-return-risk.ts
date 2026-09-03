import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerInitiatedReturnRisk = {
  score: number;
  riskTier: number;
};

export const customerInitiatedReturnRiskSchema: Schema<CustomerInitiatedReturnRisk> =
  s.object<CustomerInitiatedReturnRisk>({
    score: s.number(),
    riskTier: s.number(),
    _keysMap: {
      riskTier: "risk_tier",
    },
  });
