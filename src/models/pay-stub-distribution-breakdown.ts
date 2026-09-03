import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayStubDistributionBreakdown = {
  accountName: string | null;
  bankName: string | null;
  currentAmount: number | null;
  isoCurrencyCode: string | null;
  mask: string | null;
  type: string | null;
  unofficialCurrencyCode: string | null;
};

export const payStubDistributionBreakdownSchema: Schema<PayStubDistributionBreakdown> =
  s.object<PayStubDistributionBreakdown>({
    accountName: s.nullable(s.string()),
    bankName: s.nullable(s.string()),
    currentAmount: s.nullable(s.number()),
    isoCurrencyCode: s.nullable(s.string()),
    mask: s.nullable(s.string()),
    type: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      accountName: "account_name",
      bankName: "bank_name",
      currentAmount: "current_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
