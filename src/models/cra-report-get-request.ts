import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  consumerReportPermissiblePurposeSchema,
  type ConsumerReportPermissiblePurpose,
} from "./consumer-report-permissible-purpose.js";
import { craReportDecisionStageSchema, type CraReportDecisionStage } from "./cra-report-decision-stage.js";
import {
  craReportGetRequestProductSchema,
  type CraReportGetRequestProduct,
} from "./cra-report-get-request-product.js";
import { craReportScopeSchema, type CraReportScope } from "./cra-report-scope.js";

export type CraReportGetRequest = {
  clientId?: string;
  secret?: string;
  userId: string;
  products: CraReportGetRequestProduct[];
  scope?: CraReportScope;
  decisionStage: CraReportDecisionStage;
  consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose;
};

export const craReportGetRequestSchema: Schema<CraReportGetRequest> = s.object<CraReportGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userId: s.string(),
  products: s.array(s.lazy(() => craReportGetRequestProductSchema)),
  scope: s.optional(s.lazy(() => craReportScopeSchema)),
  decisionStage: craReportDecisionStageSchema,
  consumerReportPermissiblePurpose: consumerReportPermissiblePurposeSchema,
  _keysMap: {
    clientId: "client_id",
    userId: "user_id",
    decisionStage: "decision_stage",
    consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
  },
});
