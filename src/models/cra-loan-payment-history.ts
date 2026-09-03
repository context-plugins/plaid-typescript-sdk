import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraLoanPaymentHistory = {
  period: number;
  dueDate: string;
  daysPastDue: number;
  amountPastDue?: number;
  balanceRemaining?: number;
};

export const craLoanPaymentHistorySchema: Schema<CraLoanPaymentHistory> = s.object<CraLoanPaymentHistory>({
  period: s.number(),
  dueDate: s.dateOnly(),
  daysPastDue: s.number(),
  amountPastDue: s.optional(s.number()),
  balanceRemaining: s.optional(s.number()),
  _keysMap: {
    dueDate: "due_date",
    daysPastDue: "days_past_due",
    amountPastDue: "amount_past_due",
    balanceRemaining: "balance_remaining",
  },
});
