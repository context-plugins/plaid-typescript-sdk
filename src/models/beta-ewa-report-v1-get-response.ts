import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ewaScoreSchema, type EwaScore } from "./ewa-score.js";

export type BetaEwaReportV1GetResponse = {
  requestId?: string;
  ewaReportId?: string;
  generationTime?: Date;
  ewaScores?: EwaScore[];
  ewaAttributes?: Record<string, number | null> | null;
};

export const betaEwaReportV1GetResponseSchema: Schema<BetaEwaReportV1GetResponse> =
  s.object<BetaEwaReportV1GetResponse>({
    requestId: s.optional(s.string()),
    ewaReportId: s.optional(s.string()),
    generationTime: s.optional(s.dateTime()),
    ewaScores: s.optional(s.array(s.lazy(() => ewaScoreSchema))),
    ewaAttributes: s.optionalNullable(s.record(s.string(), s.nullable(s.number()))),
    _keysMap: {
      requestId: "request_id",
      ewaReportId: "ewa_report_id",
      generationTime: "generation_time",
      ewaScores: "ewa_scores",
      ewaAttributes: "ewa_attributes",
    },
  });
