import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paySchema, type Pay } from "./pay.js";

export type DistributionBreakdown = {
  accountName?: string | null;
  bankName?: string | null;
  currentAmount?: number | null;
  isoCurrencyCode?: string | null;
  mask?: string | null;
  type?: string | null;
  unofficialCurrencyCode?: string | null;
  currentPay?: Pay;
};

export const distributionBreakdownSchema: Schema<DistributionBreakdown> = s.object<DistributionBreakdown>({
  accountName: s.optionalNullable(s.string()),
  bankName: s.optionalNullable(s.string()),
  currentAmount: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  mask: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  currentPay: s.optional(s.lazy(() => paySchema)),
  _keysMap: {
    accountName: "account_name",
    bankName: "bank_name",
    currentAmount: "current_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    currentPay: "current_pay",
  },
});
