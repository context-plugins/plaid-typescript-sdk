import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomeVerificationDocParsingConfig = {
  Ocr: "ocr",
  RiskSignals: "risk_signals",
} as const;
export type IncomeVerificationDocParsingConfig =
  | (typeof IncomeVerificationDocParsingConfig)[keyof typeof IncomeVerificationDocParsingConfig]
  | (string & {});

export const incomeVerificationDocParsingConfigSchema: EnumSchema<IncomeVerificationDocParsingConfig> =
  s.enumOf<IncomeVerificationDocParsingConfig>(IncomeVerificationDocParsingConfig);
