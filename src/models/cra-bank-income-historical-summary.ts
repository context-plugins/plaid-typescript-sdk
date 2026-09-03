import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craBankIncomeTransactionSchema,
  type CraBankIncomeTransaction,
} from "./cra-bank-income-transaction.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

export type CraBankIncomeHistoricalSummary = {
  totalAmounts?: CreditAmountWithCurrency[];
  startDate?: string;
  endDate?: string;
  transactions?: CraBankIncomeTransaction[];
};

export const craBankIncomeHistoricalSummarySchema: Schema<CraBankIncomeHistoricalSummary> =
  s.object<CraBankIncomeHistoricalSummary>({
    totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    transactions: s.optional(s.array(s.lazy(() => craBankIncomeTransactionSchema))),
    _keysMap: {
      totalAmounts: "total_amounts",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
