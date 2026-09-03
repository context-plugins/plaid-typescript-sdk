import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { riskCheckLinkedServiceSchema, type RiskCheckLinkedService } from "./risk-check-linked-service.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

export type RiskCheckPhone = {
  linkedServices: RiskCheckLinkedService[];
  riskLevel?: RiskLevel;
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
