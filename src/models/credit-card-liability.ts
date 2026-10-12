import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aprSchema, type Apr } from "./apr.js";

/** An object representing a credit card account. */
export type CreditCardLiability = {
  /** The ID of the account that this liability belongs to. */
  accountId: string | null;
  /**
   * The various interest rates that apply to the account. APR information is not provided by all
   * card issuers; if APR data is not available, this array will be empty.
   */
  aprs: Apr[];
  /** true if a payment is currently overdue. Availability for this field is limited. */
  isOverdue: boolean | null;
  /** The amount of the last payment. */
  lastPaymentAmount: number | null;
  /**
   * The date of the last payment. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). Availability for this field is
   * limited.
   */
  lastPaymentDate: string | null;
  /**
   * The date of the last statement. Dates are returned in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  lastStatementIssueDate: string | null;
  /** The total amount owed as of the last statement issued */
  lastStatementBalance: number | null;
  /** The minimum payment due for the next billing cycle. */
  minimumPaymentAmount: number | null;
  /**
   * The due date for the next payment. The due date is `null` if a payment is not expected. Dates
   * are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  nextPaymentDueDate: string | null;
};

export const creditCardLiabilitySchema: Schema<CreditCardLiability> = s.object<CreditCardLiability>({
  accountId: s.nullable(s.string()),
  aprs: s.array(s.lazy(() => aprSchema)),
  isOverdue: s.nullable(s.boolean()),
  lastPaymentAmount: s.nullable(s.float64()),
  lastPaymentDate: s.nullable(s.dateOnly()),
  lastStatementIssueDate: s.nullable(s.dateOnly()),
  lastStatementBalance: s.nullable(s.float64()),
  minimumPaymentAmount: s.nullable(s.float64()),
  nextPaymentDueDate: s.nullable(s.dateOnly()),
  _keysMap: {
    accountId: "account_id",
    isOverdue: "is_overdue",
    lastPaymentAmount: "last_payment_amount",
    lastPaymentDate: "last_payment_date",
    lastStatementIssueDate: "last_statement_issue_date",
    lastStatementBalance: "last_statement_balance",
    minimumPaymentAmount: "minimum_payment_amount",
    nextPaymentDueDate: "next_payment_due_date",
  },
});
