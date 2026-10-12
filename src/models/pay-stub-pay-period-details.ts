import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditPayStubPayBasisTypeSchema,
  type CreditPayStubPayBasisType,
} from "./credit-pay-stub-pay-basis-type.js";
import {
  payStubDistributionBreakdownSchema,
  type PayStubDistributionBreakdown,
} from "./pay-stub-distribution-breakdown.js";

/** Details about the pay period. */
export type PayStubPayPeriodDetails = {
  /** The amount of the paycheck. */
  payAmount: number | null;
  distributionBreakdown: PayStubDistributionBreakdown[];
  /**
   * The date on which the pay period ended, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ("yyyy-mm-dd").
   */
  endDate: string | null;
  /** Total earnings before tax/deductions. */
  grossEarnings: number | null;
  /**
   * The ISO-4217 currency code of the net pay. Always `null` if `unofficial_currency_code` is
   * non-null.
   */
  isoCurrencyCode: string | null;
  /**
   * The date on which the pay stub was issued, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ("yyyy-mm-dd").
   */
  payDate: string | null;
  /** The frequency at which an individual is paid. */
  payFrequency: string | null;
  /** The explicit pay basis on the paystub (if present). */
  payBasis?: CreditPayStubPayBasisType;
  /**
   * The date on which the pay period started, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ("yyyy-mm-dd").
   */
  startDate: string | null;
  /**
   * The unofficial currency code associated with the net pay. Always `null` if `iso_currency_code`
   * is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO
   * currency codes, such as cryptocurrencies and the currencies of certain countries.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
};

export const payStubPayPeriodDetailsSchema: Schema<PayStubPayPeriodDetails> =
  s.object<PayStubPayPeriodDetails>({
    payAmount: s.nullable(s.float64()),
    distributionBreakdown: s.array(s.lazy(() => payStubDistributionBreakdownSchema)),
    endDate: s.nullable(s.dateOnly()),
    grossEarnings: s.nullable(s.float64()),
    isoCurrencyCode: s.nullable(s.string()),
    payDate: s.nullable(s.dateOnly()),
    payFrequency: s.nullable(s.string()),
    payBasis: s.optional(s.lazy(() => creditPayStubPayBasisTypeSchema)),
    startDate: s.nullable(s.dateOnly()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      payAmount: "pay_amount",
      distributionBreakdown: "distribution_breakdown",
      endDate: "end_date",
      grossEarnings: "gross_earnings",
      isoCurrencyCode: "iso_currency_code",
      payDate: "pay_date",
      payFrequency: "pay_frequency",
      payBasis: "pay_basis",
      startDate: "start_date",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
