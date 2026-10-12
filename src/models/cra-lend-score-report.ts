import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lendScoreSchema, type LendScore } from "./lend-score.js";

/** Contains data for the CRA LendScore Report. */
export type CraLendScoreReport = {
  /** The unique identifier associated with the report object. */
  reportId: string;
  /** The time when the report was generated. */
  generatedTime: Date;
  /** The results of the LendScore */
  lendScore?: LendScore | null;
};

export const craLendScoreReportSchema: Schema<CraLendScoreReport> = s.object<CraLendScoreReport>({
  reportId: s.string(),
  generatedTime: s.dateTime(),
  lendScore: s.optionalNullable(s.lazy(() => lendScoreSchema)),
  _keysMap: {
    reportId: "report_id",
    generatedTime: "generated_time",
    lendScore: "lend_score",
  },
});
