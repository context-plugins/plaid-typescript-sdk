import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskCheckLinkedServiceSchema, type RiskCheckLinkedService } from "./risk-check-linked-service.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

/** Result summary object specifying values for `phone` attributes of risk check. */
export type RiskCheckPhone = {
  /**
   * A list of online services where this phone number has been detected to have accounts or other
   * activity.
   */
  linkedServices: RiskCheckLinkedService[];
  /** Risk level for the given risk check type. */
  riskLevel?: RiskLevel;
  /**
   * List of factors, when available, that contribute towards the risk level of the given risk check
   * type.
   */
  factors?: string[];
};

export const riskCheckPhoneSchema: Schema<RiskCheckPhone> = s.object<RiskCheckPhone>({
  linkedServices: s.array(s.lazy(() => riskCheckLinkedServiceSchema)),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  factors: s.optional(s.array(s.string())),
  _keysMap: {
    linkedServices: "linked_services",
    riskLevel: "risk_level",
  },
});
