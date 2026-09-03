import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aprSchema, type Apr } from "./apr.js";

export type CreditCardLiability = {
  accountId: string | null;
  aprs: Apr[];
  isOverdue: boolean | null;
  lastPaymentAmount: number | null;
  lastPaymentDate: string | null;
  lastStatementIssueDate: string | null;
  lastStatementBalance: number | null;
  minimumPaymentAmount: number | null;
  nextPaymentDueDate: string | null;
};

export const creditCardLiabilitySchema: Schema<CreditCardLiability> = s.object<CreditCardLiability>({
  accountId: s.nullable(s.string()),
  aprs: s.array(s.lazy(() => aprSchema)),
  isOverdue: s.nullable(s.boolean()),
  lastPaymentAmount: s.nullable(s.number()),
  lastPaymentDate: s.nullable(s.dateOnly()),
  lastStatementIssueDate: s.nullable(s.dateOnly()),
  lastStatementBalance: s.nullable(s.number()),
  minimumPaymentAmount: s.nullable(s.number()),
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
