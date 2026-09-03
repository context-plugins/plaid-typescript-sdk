import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskSignalFileType = {
  Unknown: "UNKNOWN",
  ImagePdf: "IMAGE_PDF",
  ScanOcr: "SCAN_OCR",
  TruePdf: "TRUE_PDF",
  Image: "IMAGE",
  MixedPagePdf: "MIXED_PAGE_PDF",
  EmptyPdf: "EMPTY_PDF",
  FlattenedPdf: "FLATTENED_PDF",
} as const;
export type RiskSignalFileType = (typeof RiskSignalFileType)[keyof typeof RiskSignalFileType] | (string & {});

export const riskSignalFileTypeSchema: EnumSchema<RiskSignalFileType> =
  s.enumOf<RiskSignalFileType>(RiskSignalFileType);
