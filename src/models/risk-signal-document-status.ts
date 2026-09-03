import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskSignalDocumentStatus = {
  Processing: "PROCESSING",
  ProcessingComplete: "PROCESSING_COMPLETE",
  ProcessingError: "PROCESSING_ERROR",
  PasswordProtected: "PASSWORD_PROTECTED",
  VirusDetected: "VIRUS_DETECTED",
} as const;
export type RiskSignalDocumentStatus =
  | (typeof RiskSignalDocumentStatus)[keyof typeof RiskSignalDocumentStatus]
  | (string & {});

export const riskSignalDocumentStatusSchema: EnumSchema<RiskSignalDocumentStatus> =
  s.enumOf<RiskSignalDocumentStatus>(RiskSignalDocumentStatus);
