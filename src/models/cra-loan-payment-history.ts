import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains the payment information for a loan payment period. */
export type CraLoanPaymentHistory = {
  /**
   * The index to identify the loan's payment period, starting from 1. For example: 1 means the
   * period between the loan's opening date and the 1st payment due date. 2 means the period between
   * the loan's 1st payment due date and 2nd payment due date.
   */
  period: number;
  /**
   * The payment due date or end date of the payment period. The date should be in ISO 8601 format
   * (YYYY-MM-DD).
   */
  dueDate: string;
  /**
   * The number of days the loan was delinquent at the end of the pay period. If specified, should
   * be greater than or equal to 0.
   */
  daysPastDue: number;
  /** The amount past due or the charge-off amount of the loan at the end of the payment period. */
  amountPastDue?: number;
  /** The balance remaining on the loan at the end of the payment period. */
  balanceRemaining?: number;
};

export const craLoanPaymentHistorySchema: Schema<CraLoanPaymentHistory> = s.object<CraLoanPaymentHistory>({
  period: s.int(),
  dueDate: s.dateOnly(),
  daysPastDue: s.int(),
  amountPastDue: s.optional(s.float64()),
  balanceRemaining: s.optional(s.float64()),
  _keysMap: {
    dueDate: "due_date",
    daysPastDue: "days_past_due",
    amountPastDue: "amount_past_due",
    balanceRemaining: "balance_remaining",
  },
});
