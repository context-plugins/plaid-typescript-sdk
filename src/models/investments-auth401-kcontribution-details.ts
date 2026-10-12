import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { investmentTransactionSchema, type InvestmentTransaction } from "./investment-transaction.js";

/**
 * Object containing information on contribution transactions for the 401k account. Note that the
 * sum fields in this object represent the total of absolute contribution values.
 */
export type InvestmentsAuth401KContributionDetails = {
  /**
   * A list of the most recent contribution transactions for the 401k account. Includes all
   * contributions made on the same day.
   */
  lastContributionTransactions: InvestmentTransaction[];
  /** Number of contribution transactions on this account, for the past month. */
  contributionCount1M: number;
  /** Sum of the contribution transactions on this account, for the past month. */
  contributionAmount1M: number;
  /** Number of contribution transactions on this account, for the past 6 months. */
  contributionCount6M: number;
  /** Sum of the contribution transactions on this account, for the past 6 months. */
  contributionAmount6M: number;
  /** Number of contribution transactions on this account, for the past 12 months. */
  contributionCount12M: number;
  /** Sum of the contribution transactions on this account, for the past 12 months. */
  contributionAmount12M: number;
};

export const investmentsAuth401KContributionDetailsSchema: Schema<InvestmentsAuth401KContributionDetails> =
  s.object<InvestmentsAuth401KContributionDetails>({
    lastContributionTransactions: s.array(s.lazy(() => investmentTransactionSchema)),
    contributionCount1M: s.int(),
    contributionAmount1M: s.float64(),
    contributionCount6M: s.int(),
    contributionAmount6M: s.float64(),
    contributionCount12M: s.int(),
    contributionAmount12M: s.float64(),
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
