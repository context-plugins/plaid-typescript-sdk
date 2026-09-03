import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

export type BaseReportAverageMonthlyBalances = {
  startDate: string;
  endDate: string;
  averageBalance: CreditAmountWithCurrency;
};

export const baseReportAverageMonthlyBalancesSchema: Schema<BaseReportAverageMonthlyBalances> =
  s.object<BaseReportAverageMonthlyBalances>({
    startDate: s.string(),
    endDate: s.string(),
    averageBalance: creditAmountWithCurrencySchema,
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      averageBalance: "average_balance",
    },
  });
