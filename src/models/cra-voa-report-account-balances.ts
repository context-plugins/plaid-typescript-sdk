import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVoaReportAccountHistoricalBalanceSchema,
  type CraVoaReportAccountHistoricalBalance,
} from "./cra-voa-report-account-historical-balance.js";

export type CraVoaReportAccountBalances = {
  available: number | null;
  current: number | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  historicalBalances: CraVoaReportAccountHistoricalBalance[];
  averageBalance30Days: number | null;
  averageBalance60Days: number | null;
  nsfOverdraftTransactionsCount: number;
};

export const craVoaReportAccountBalancesSchema: Schema<CraVoaReportAccountBalances> =
  s.object<CraVoaReportAccountBalances>({
    available: s.nullable(s.number()),
    current: s.nullable(s.number()),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    historicalBalances: s.array(s.lazy(() => craVoaReportAccountHistoricalBalanceSchema)),
    averageBalance30Days: s.nullable(s.number()),
    averageBalance60Days: s.nullable(s.number()),
    nsfOverdraftTransactionsCount: s.number(),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      historicalBalances: "historical_balances",
      averageBalance30Days: "average_balance_30_days",
      averageBalance60Days: "average_balance_60_days",
      nsfOverdraftTransactionsCount: "nsf_overdraft_transactions_count",
    },
  });
