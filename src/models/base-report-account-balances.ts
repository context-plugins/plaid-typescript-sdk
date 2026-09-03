import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  baseReportAverageMonthlyBalancesSchema,
  type BaseReportAverageMonthlyBalances,
} from "./base-report-average-monthly-balances.js";

export type BaseReportAccountBalances = {
  available: number | null;
  current: number | null;
  limit: number | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  lastUpdatedDatetime?: Date | null;
  averageBalance?: number | null;
  averageMonthlyBalances?: BaseReportAverageMonthlyBalances[];
  mostRecentThirtyDayAverageBalance?: number | null;
};

export const baseReportAccountBalancesSchema: Schema<BaseReportAccountBalances> =
  s.object<BaseReportAccountBalances>({
    available: s.nullable(s.number()),
    current: s.nullable(s.number()),
    limit: s.nullable(s.number()),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    lastUpdatedDatetime: s.optionalNullable(s.dateTime()),
    averageBalance: s.optionalNullable(s.number()),
    averageMonthlyBalances: s.optional(s.array(s.lazy(() => baseReportAverageMonthlyBalancesSchema))),
    mostRecentThirtyDayAverageBalance: s.optionalNullable(s.number()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      lastUpdatedDatetime: "last_updated_datetime",
      averageBalance: "average_balance",
      averageMonthlyBalances: "average_monthly_balances",
      mostRecentThirtyDayAverageBalance: "most_recent_thirty_day_average_balance",
    },
  });
