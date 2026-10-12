import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Information about the student's eligibility in the Public Service Loan Forgiveness program. This
 * is only returned if the institution is FedLoan (`ins_116527`). Since FedLoan no longer services
 * student loans, this field is no longer returned.
 */
export type PslfStatus = {
  /**
   * The estimated date borrower will have completed 120 qualifying monthly payments. Returned in
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  estimatedEligibilityDate: string | null;
  /** The number of qualifying payments that have been made. */
  paymentsMade: number | null;
  /** The number of qualifying payments remaining. */
  paymentsRemaining: number | null;
};

export const pslfStatusSchema: Schema<PslfStatus> = s.object<PslfStatus>({
  estimatedEligibilityDate: s.nullable(s.dateOnly()),
  paymentsMade: s.nullable(s.int()),
  paymentsRemaining: s.nullable(s.int()),
  _keysMap: {
    estimatedEligibilityDate: "estimated_eligibility_date",
    paymentsMade: "payments_made",
    paymentsRemaining: "payments_remaining",
  },
});
