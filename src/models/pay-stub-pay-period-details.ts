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

export type PayStubPayPeriodDetails = {
  payAmount: number | null;
  distributionBreakdown: PayStubDistributionBreakdown[];
  endDate: string | null;
  grossEarnings: number | null;
  isoCurrencyCode: string | null;
  payDate: string | null;
  payFrequency: string | null;
  payBasis?: CreditPayStubPayBasisType;
  startDate: string | null;
  unofficialCurrencyCode: string | null;
};

export const payStubPayPeriodDetailsSchema: Schema<PayStubPayPeriodDetails> =
  s.object<PayStubPayPeriodDetails>({
    payAmount: s.nullable(s.number()),
    distributionBreakdown: s.array(s.lazy(() => payStubDistributionBreakdownSchema)),
    endDate: s.nullable(s.dateOnly()),
    grossEarnings: s.nullable(s.number()),
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
