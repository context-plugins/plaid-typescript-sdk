import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  consumerReportPermissiblePurposeSchema,
  type ConsumerReportPermissiblePurpose,
} from "./consumer-report-permissible-purpose.js";
import { craReportDecisionStageSchema, type CraReportDecisionStage } from "./cra-report-decision-stage.js";
import {
  craReportGetResponseProductSchema,
  type CraReportGetResponseProduct,
} from "./cra-report-get-response-product.js";
import { craReportScopeSchema, type CraReportScope } from "./cra-report-scope.js";

export type CraReportGetReport = {
  retrievedTime: Date;
  scope: CraReportScope;
  decisionStage: CraReportDecisionStage;
  consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose;
  products: CraReportGetResponseProduct[];
};

export const craReportGetReportSchema: Schema<CraReportGetReport> = s.object<CraReportGetReport>({
  retrievedTime: s.dateTime(),
  scope: craReportScopeSchema,
  decisionStage: craReportDecisionStageSchema,
  consumerReportPermissiblePurpose: consumerReportPermissiblePurposeSchema,
  products: s.array(s.lazy(() => craReportGetResponseProductSchema)),
  _keysMap: {
    retrievedTime: "retrieved_time",
    decisionStage: "decision_stage",
    consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
  },
});
