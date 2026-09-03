import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lendScoreSchema, type LendScore } from "./lend-score.js";

export type CraLendScoreReport = {
  reportId: string;
  generatedTime: Date;
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
