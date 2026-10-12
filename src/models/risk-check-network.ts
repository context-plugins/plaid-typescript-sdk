import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

/** Result summary object specifying values for network attributes of risk check. */
export type RiskCheckNetwork = {
  /** Risk level for the given risk check type. */
  riskLevel: RiskLevel;
  /**
   * List of factors, when available, that contribute towards the risk level of the given risk check
   * type.
   */
  factors: string[];
};

export const riskCheckNetworkSchema: Schema<RiskCheckNetwork> = s.object<RiskCheckNetwork>({
  riskLevel: riskLevelSchema,
  factors: s.array(s.string()),
  _keysMap: {
    riskLevel: "risk_level",
  },
});
