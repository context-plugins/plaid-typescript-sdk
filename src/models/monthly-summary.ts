import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";

export type MonthlySummary = {
  startDate?: string | null;
  endDate?: string | null;
  totalAmount?: AmountWithCurrency | null;
};

export const monthlySummarySchema: Schema<MonthlySummary> = s.object<MonthlySummary>({
  startDate: s.optionalNullable(s.dateOnly()),
  endDate: s.optionalNullable(s.dateOnly()),
  totalAmount: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
  _keysMap: {
    startDate: "start_date",
    endDate: "end_date",
    totalAmount: "total_amount",
  },
});
