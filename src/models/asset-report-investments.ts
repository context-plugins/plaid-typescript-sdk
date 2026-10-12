import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportInvestmentHoldingSchema,
  type AssetReportInvestmentHolding,
} from "./asset-report-investment-holding.js";
import {
  assetReportInvestmentSecuritySchema,
  type AssetReportInvestmentSecurity,
} from "./asset-report-investment-security.js";
import {
  assetReportInvestmentTransactionSchema,
  type AssetReportInvestmentTransaction,
} from "./asset-report-investment-transaction.js";

/** A set of fields describing the investments data on an account. */
export type AssetReportInvestments = {
  /**
   * Quantities and values of securities held in the investment account. Map to the `securities`
   * array for security details.
   */
  holdings?: AssetReportInvestmentHolding[];
  /** Details of specific securities held in on the investment account. */
  securities?: AssetReportInvestmentSecurity[];
  /** Transaction history on the investment account. */
  transactions?: AssetReportInvestmentTransaction[];
};

export const assetReportInvestmentsSchema: Schema<AssetReportInvestments> = s.object<AssetReportInvestments>({
  holdings: s.optional(s.array(s.lazy(() => assetReportInvestmentHoldingSchema))),
  securities: s.optional(s.array(s.lazy(() => assetReportInvestmentSecuritySchema))),
  transactions: s.optional(s.array(s.lazy(() => assetReportInvestmentTransactionSchema))),
});
