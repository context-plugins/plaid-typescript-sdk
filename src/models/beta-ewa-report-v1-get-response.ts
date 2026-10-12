import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ewaScoreSchema, type EwaScore } from "./ewa-score.js";

/** BetaEwaReportV1GetResponse defines the response schema for `/beta/ewa_report/v1/get` */
export type BetaEwaReportV1GetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
  /** Unique identifier for the generated EWA score group. */
  ewaReportId?: string;
  /**
   * The date and time when `ewa_scores` was generated, in ISO 8601 format (e.g.
   * "2018-04-12T03:32:11Z").
   */
  generationTime?: Date;
  /**
   * A list of earned wage access (EWA) scoring entries that map potential advance amounts to
   * repayment likelihood scores. The predefined advance amount ranges are `[0, 25)`, `[25, 50)`,
   * `[50, 100)`, `[100, 200)`, `[200, 300)`, `[300, 400)`, and `[400, 500)`.
   */
  ewaScores?: EwaScore[];
  /**
   * A set of attributes providing context about the factors that contributed to the EWA scores.
   * Each key is the attribute name and the value is its numeric score, or null if the attribute
   * could not be computed.
   */
  ewaAttributes?: Record<string, number | null> | null;
};

export const betaEwaReportV1GetResponseSchema: Schema<BetaEwaReportV1GetResponse> =
  s.object<BetaEwaReportV1GetResponse>({
    requestId: s.optional(s.string()),
    ewaReportId: s.optional(s.string()),
    generationTime: s.optional(s.dateTime()),
    ewaScores: s.optional(s.array(s.lazy(() => ewaScoreSchema))),
    ewaAttributes: s.optionalNullable(s.record(s.string(), s.nullable(s.float64()))),
    _keysMap: {
      requestId: "request_id",
      ewaReportId: "ewa_report_id",
      generationTime: "generation_time",
      ewaScores: "ewa_scores",
      ewaAttributes: "ewa_attributes",
    },
  });
