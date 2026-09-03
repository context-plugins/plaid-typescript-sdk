import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  riskCheckBehaviorBotDetectedLabelSchema,
  type RiskCheckBehaviorBotDetectedLabel,
} from "./risk-check-behavior-bot-detected-label.js";
import {
  riskCheckBehaviorFraudRingDetectedLabelSchema,
  type RiskCheckBehaviorFraudRingDetectedLabel,
} from "./risk-check-behavior-fraud-ring-detected-label.js";
import {
  riskCheckBehaviorUserInteractionsLabelSchema,
  type RiskCheckBehaviorUserInteractionsLabel,
} from "./risk-check-behavior-user-interactions-label.js";
import { riskLevelWithNoDataSchema, type RiskLevelWithNoData } from "./risk-level-with-no-data.js";

export type RiskCheckBehavior = {
  userInteractions: RiskCheckBehaviorUserInteractionsLabel;
  fraudRingDetected: RiskCheckBehaviorFraudRingDetectedLabel;
  botDetected: RiskCheckBehaviorBotDetectedLabel;
  riskLevel?: RiskLevelWithNoData;
};

export const riskCheckBehaviorSchema: Schema<RiskCheckBehavior> = s.object<RiskCheckBehavior>({
  userInteractions: riskCheckBehaviorUserInteractionsLabelSchema,
  fraudRingDetected: riskCheckBehaviorFraudRingDetectedLabelSchema,
  botDetected: riskCheckBehaviorBotDetectedLabelSchema,
  riskLevel: s.optional(s.lazy(() => riskLevelWithNoDataSchema)),
  _keysMap: {
    userInteractions: "user_interactions",
    fraudRingDetected: "fraud_ring_detected",
    botDetected: "bot_detected",
    riskLevel: "risk_level",
  },
});
