import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfieAnalysisSchema, type SelfieAnalysis } from "./selfie-analysis.js";
import { selfieCaptureSchema, type SelfieCapture } from "./selfie-capture.js";
import { selfieStatusSchema, type SelfieStatus } from "./selfie-status.js";

export type SelfieCheckSelfie = {
  status: SelfieStatus;
  attempt: number;
  capture: SelfieCapture;
  analysis: SelfieAnalysis;
};

export const selfieCheckSelfieSchema: Schema<SelfieCheckSelfie> = s.object<SelfieCheckSelfie>({
  status: selfieStatusSchema,
  attempt: s.number(),
  capture: selfieCaptureSchema,
  analysis: selfieAnalysisSchema,
});
