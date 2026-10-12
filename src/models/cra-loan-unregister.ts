import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanClosedStatusSchema, type CraLoanClosedStatus } from "./cra-loan-closed-status.js";

/** Contains loan data for the loan being unregistered. */
export type CraLoanUnregister = {
  /**
   * A unique identifier for the loan. Personally identifiable information, such as an email address
   * or phone number, should not be used in the `loan_id`.
   */
  loanId: string;
  /** Contains the status and date information of the loan when unregistering. */
  closedWithStatus: CraLoanClosedStatus;
};

export const craLoanUnregisterSchema: Schema<CraLoanUnregister> = s.object<CraLoanUnregister>({
  loanId: s.string(),
  closedWithStatus: craLoanClosedStatusSchema,
  _keysMap: {
    loanId: "loan_id",
    closedWithStatus: "closed_with_status",
  },
});
