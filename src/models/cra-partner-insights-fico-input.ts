import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsUltraFicoScoreRequestSchema,
  type CraPartnerInsightsUltraFicoScoreRequest,
} from "./cra-partner-insights-ultra-fico-score-request.js";

/** Configuration for the FICO products used in the Partner Insights product. */
export type CraPartnerInsightsFicoInput = {
  /**
   * ID provided by FICO that uniquely identifies the lender. Required for UltraFICO® score
   * generation. Sometimes referred to as Lender Org ID.
   */
  ficoLenderId: string;
  /**
   * Client-generated identifier that uniquely identifies the FICO Application across FICO systems.
   */
  lenderApplicationId: string;
  /**
   * A list of UltraFICO® scoring requests. Each request contains all configuration required to
   * generate an UltraFICO score.
   */
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
