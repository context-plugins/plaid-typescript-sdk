import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsUltraFicoScoreRequestSchema,
  type CraPartnerInsightsUltraFicoScoreRequest,
} from "./cra-partner-insights-ultra-fico-score-request.js";

export type CraPartnerInsightsFicoInput = {
  ficoLenderId: string;
  lenderApplicationId: string;
  ultraficoScoreRequests: CraPartnerInsightsUltraFicoScoreRequest[];
};

export const craPartnerInsightsFicoInputSchema: Schema<CraPartnerInsightsFicoInput> =
  s.object<CraPartnerInsightsFicoInput>({
    ficoLenderId: s.string(),
    lenderApplicationId: s.string(),
    ultraficoScoreRequests: s.array(s.lazy(() => craPartnerInsightsUltraFicoScoreRequestSchema)),
    _keysMap: {
      ficoLenderId: "fico_lender_id",
      lenderApplicationId: "lender_application_id",
      ultraficoScoreRequests: "ultrafico_score_requests",
    },
  });
