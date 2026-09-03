import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsFicoReportCharacteristicsSchema,
  type CraPartnerInsightsFicoReportCharacteristics,
} from "./cra-partner-insights-fico-report-characteristics.js";
import {
  craPartnerInsightsUltraFicoScoreResultSchema,
  type CraPartnerInsightsUltraFicoScoreResult,
} from "./cra-partner-insights-ultra-fico-score-result.js";

export type CraPartnerInsightsFicoResults = {
  lenderApplicationId: string;
  ultraficoScoreResults: CraPartnerInsightsUltraFicoScoreResult[];
  reportCharacteristics?: CraPartnerInsightsFicoReportCharacteristics | null;
};

export const craPartnerInsightsFicoResultsSchema: Schema<CraPartnerInsightsFicoResults> =
  s.object<CraPartnerInsightsFicoResults>({
    lenderApplicationId: s.string(),
    ultraficoScoreResults: s.array(s.lazy(() => craPartnerInsightsUltraFicoScoreResultSchema)),
    reportCharacteristics: s.optionalNullable(
      s.lazy(() => craPartnerInsightsFicoReportCharacteristicsSchema),
    ),
    _keysMap: {
      lenderApplicationId: "lender_application_id",
      ultraficoScoreResults: "ultrafico_score_results",
      reportCharacteristics: "report_characteristics",
    },
  });
