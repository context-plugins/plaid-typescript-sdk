import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";
import {
  negativeBalanceOccurrenceSchema,
  type NegativeBalanceOccurrence,
} from "./negative-balance-occurrence.js";

export type NegativeBalanceInsights = {
  daysSinceLastOccurrence?: number | null;
  daysWithNegativeBalance?: number | null;
  minimumBalance?: AmountWithCurrency | null;
  occurrences?: (NegativeBalanceOccurrence | null)[];
};

export const negativeBalanceInsightsSchema: Schema<NegativeBalanceInsights> =
  s.object<NegativeBalanceInsights>({
    daysSinceLastOccurrence: s.optionalNullable(s.number()),
    daysWithNegativeBalance: s.optionalNullable(s.number()),
    minimumBalance: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
    occurrences: s.optional(s.array(s.nullable(s.lazy(() => negativeBalanceOccurrenceSchema)))),
    _keysMap: {
      daysSinceLastOccurrence: "days_since_last_occurrence",
      daysWithNegativeBalance: "days_with_negative_balance",
      minimumBalance: "minimum_balance",
    },
  });
