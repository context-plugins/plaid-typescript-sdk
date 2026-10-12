import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craLoanApplicationDecisionSchema,
  type CraLoanApplicationDecision,
} from "./cra-loan-application-decision.js";
import { craLoanTypeSchema, type CraLoanType } from "./cra-loan-type.js";

/** Contains loan application data. */
export type CraLoanApplication = {
  /** The user token for the user associated with the loan. */
  userToken: string;
  /**
   * A unique identifier for the loan application. Personally identifiable information, such as an
   * email address or phone number, should not be used in the `application_id`.
   */
  applicationId: string;
  /** The type of loan the user applied for. */
  type: CraLoanType;
  /** The decision of the loan application. */
  decision: CraLoanApplicationDecision;
  /** The date the user applied for the loan. The date should be in ISO 8601 format (YYYY-MM-DD). */
  applicationDate?: string;
  /**
   * The date when the loan application's decision was made. The date should be in ISO 8601 format
   * (YYYY-MM-DD).
   */
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
