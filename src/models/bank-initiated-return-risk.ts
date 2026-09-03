import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankInitiatedReturnRisk = {
  score: number;
  riskTier: number;
};

export const bankInitiatedReturnRiskSchema: Schema<BankInitiatedReturnRisk> =
  s.object<BankInitiatedReturnRisk>({
    score: s.number(),
    riskTier: s.number(),
    _keysMap: {
      riskTier: "risk_tier",
    },
  });
