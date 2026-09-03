import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubOverrideDistributionBreakdown = {
  accountName?: string | null;
  bankName?: string | null;
  currentAmount?: number | null;
  currency?: string | null;
  mask?: string | null;
  type?: string | null;
};

export const paystubOverrideDistributionBreakdownSchema: Schema<PaystubOverrideDistributionBreakdown> =
  s.object<PaystubOverrideDistributionBreakdown>({
    accountName: s.optionalNullable(s.string()),
    bankName: s.optionalNullable(s.string()),
    currentAmount: s.optionalNullable(s.number()),
    currency: s.optionalNullable(s.string()),
    mask: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    _keysMap: {
      accountName: "account_name",
      bankName: "bank_name",
      currentAmount: "current_amount",
    },
  });
