import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  baseReportInvestmentHoldingSchema,
  type BaseReportInvestmentHolding,
} from "./base-report-investment-holding.js";
import {
  baseReportInvestmentSecuritySchema,
  type BaseReportInvestmentSecurity,
} from "./base-report-investment-security.js";
import {
  baseReportInvestmentTransactionSchema,
  type BaseReportInvestmentTransaction,
} from "./base-report-investment-transaction.js";

/** A set of fields describing the investments data on an account. */
export type BaseReportInvestments = {
  /**
   * Quantities and values of securities held in the investment account. Map to the `securities`
   * array for security details.
   */
  holdings: BaseReportInvestmentHolding[];
  /** Details of specific securities held in the investment account. */
  securities: BaseReportInvestmentSecurity[];
  /** Transaction history on the investment account. */
  investmentTransactions: BaseReportInvestmentTransaction[];
};

export const baseReportInvestmentsSchema: Schema<BaseReportInvestments> = s.object<BaseReportInvestments>({
  holdings: s.array(s.lazy(() => baseReportInvestmentHoldingSchema)),
  securities: s.array(s.lazy(() => baseReportInvestmentSecuritySchema)),
  investmentTransactions: s.array(s.lazy(() => baseReportInvestmentTransactionSchema)),
  _keysMap: {
    investmentTransactions: "investment_transactions",
  },
});
