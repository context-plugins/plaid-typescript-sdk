import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";

export type NegativeBalanceOccurrence = {
  startDate?: string | null;
  endDate?: string | null;
  minimumBalance?: AmountWithCurrency | null;
};

export const negativeBalanceOccurrenceSchema: Schema<NegativeBalanceOccurrence> =
  s.object<NegativeBalanceOccurrence>({
    startDate: s.optionalNullable(s.dateOnly()),
    endDate: s.optionalNullable(s.dateOnly()),
    minimumBalance: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      minimumBalance: "minimum_balance",
    },
  });
