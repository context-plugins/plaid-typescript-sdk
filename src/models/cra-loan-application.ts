import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craLoanApplicationDecisionSchema,
  type CraLoanApplicationDecision,
} from "./cra-loan-application-decision.js";
import { craLoanTypeSchema, type CraLoanType } from "./cra-loan-type.js";

export type CraLoanApplication = {
  userToken: string;
  applicationId: string;
  type: CraLoanType;
  decision: CraLoanApplicationDecision;
  applicationDate?: string;
  decisionDate?: string;
};

export const craLoanApplicationSchema: Schema<CraLoanApplication> = s.object<CraLoanApplication>({
  userToken: s.string(),
  applicationId: s.string(),
  type: craLoanTypeSchema,
  decision: craLoanApplicationDecisionSchema,
  applicationDate: s.optional(s.dateOnly()),
  decisionDate: s.optional(s.dateOnly()),
  _keysMap: {
    userToken: "user_token",
    applicationId: "application_id",
    applicationDate: "application_date",
    decisionDate: "decision_date",
  },
});
