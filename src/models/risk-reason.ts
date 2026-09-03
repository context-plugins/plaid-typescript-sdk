import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RiskReason = {
  code: string;
  description: string;
};

export const riskReasonSchema: Schema<RiskReason> = s.object<RiskReason>({
  code: s.string(),
  description: s.string(),
});
