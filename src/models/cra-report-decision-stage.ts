import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CraReportDecisionStage = {
  Prequalification: "PREQUALIFICATION",
  Decisioning: "DECISIONING",
  Servicing: "SERVICING",
} as const;
export type CraReportDecisionStage =
  | (typeof CraReportDecisionStage)[keyof typeof CraReportDecisionStage]
  | (string & {});

export const craReportDecisionStageSchema: EnumSchema<CraReportDecisionStage> =
  s.enumOf<CraReportDecisionStage>(CraReportDecisionStage);
