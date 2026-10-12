import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craLoanPaymentHistorySchema, type CraLoanPaymentHistory } from "./cra-loan-payment-history.js";
import {
  craLoanStatusHistoryUpdateSchema,
  type CraLoanStatusHistoryUpdate,
} from "./cra-loan-status-history-update.js";

/** Contains loan data to update. */
export type CraLoanUpdate = {
  /**
   * A unique identifier for the loan. Personally identifiable information, such as an email address
   * or phone number, should not be used in the `loan_id`.
   */
  loanId?: string;
  /** A list of status update history of the loan. */
  statusHistory?: CraLoanStatusHistoryUpdate[];
  /** The updates to the payment history for the loan. */
  paymentHistory?: CraLoanPaymentHistory[];
};

export const craLoanUpdateSchema: Schema<CraLoanUpdate> = s.object<CraLoanUpdate>({
  loanId: s.optional(s.string()),
  statusHistory: s.optional(s.array(s.lazy(() => craLoanStatusHistoryUpdateSchema))),
  paymentHistory: s.optional(s.array(s.lazy(() => craLoanPaymentHistorySchema))),
  _keysMap: {
    loanId: "loan_id",
    statusHistory: "status_history",
    paymentHistory: "payment_history",
  },
});
