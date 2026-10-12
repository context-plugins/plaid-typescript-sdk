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

/**
 * Result summary object specifying values for `behavior` attributes of risk check, when available.
 */
export type RiskCheckBehavior = {
  /**
   * Field describing the overall user interaction signals of a behavior risk check. This value
   * represents how familiar the user is with the personal data they provide, based on a number of
   * signals that are collected during their session.
   *
   * `genuine` indicates the user has high familiarity with the data they are providing, and that
   * fraud is unlikely.
   *
   * `neutral` indicates some signals are present in between `risky` and `genuine`, but there are
   * not enough clear signals to determine an outcome.
   *
   * `risky` indicates the user has low familiarity with the data they are providing, and that fraud
   * is likely.
   *
   * `no_data` indicates there is not sufficient information to give an accurate signal.
   */
  userInteractions: RiskCheckBehaviorUserInteractionsLabel;
  /**
   * Field describing the outcome of a fraud ring behavior risk check.
   *
   * `yes` indicates that fraud ring activity was detected.
   *
   * `no` indicates that fraud ring activity was not detected.
   *
   * `no_data` indicates there was not enough information available to give an accurate signal.
   */
  fraudRingDetected: RiskCheckBehaviorFraudRingDetectedLabel;
  /**
   * Field describing the outcome of a bot detection behavior risk check.
   *
   * `yes` indicates that automated activity was detected.
   *
   * `no` indicates that automated activity was not detected.
   *
   * `no_data` indicates there was not enough information available to give an accurate signal.
   */
  botDetected: RiskCheckBehaviorBotDetectedLabel;
  /** Risk level for the given risk check type, when available. */
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
