import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { investmentTransactionSchema, type InvestmentTransaction } from "./investment-transaction.js";

export type InvestmentsAuth401KContributionDetails = {
  lastContributionTransactions: InvestmentTransaction[];
  contributionCount1M: number;
  contributionAmount1M: number;
  contributionCount6M: number;
  contributionAmount6M: number;
  contributionCount12M: number;
  contributionAmount12M: number;
};

export const investmentsAuth401KContributionDetailsSchema: Schema<InvestmentsAuth401KContributionDetails> =
  s.object<InvestmentsAuth401KContributionDetails>({
    lastContributionTransactions: s.array(s.lazy(() => investmentTransactionSchema)),
    contributionCount1M: s.number(),
    contributionAmount1M: s.number(),
    contributionCount6M: s.number(),
    contributionAmount6M: s.number(),
    contributionCount12M: s.number(),
    contributionAmount12M: s.number(),
    _keysMap: {
      lastContributionTransactions: "last_contribution_transactions",
      contributionCount1M: "contribution_count_1m",
      contributionAmount1M: "contribution_amount_1m",
      contributionCount6M: "contribution_count_6m",
      contributionAmount6M: "contribution_amount_6m",
      contributionCount12M: "contribution_count_12m",
      contributionAmount12M: "contribution_amount_12m",
    },
  });
