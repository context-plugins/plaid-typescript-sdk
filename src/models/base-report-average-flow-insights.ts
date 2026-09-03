import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

export type BaseReportAverageFlowInsights = {
  startDate: string;
  endDate: string;
  totalAmount: CreditAmountWithCurrency;
};

export const baseReportAverageFlowInsightsSchema: Schema<BaseReportAverageFlowInsights> =
  s.object<BaseReportAverageFlowInsights>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    totalAmount: creditAmountWithCurrencySchema,
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      totalAmount: "total_amount",
    },
  });
