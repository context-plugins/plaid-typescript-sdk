import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartySchema, type Counterparty } from "./counterparty.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";
import {
  transactionPaymentChannelSchema,
  type TransactionPaymentChannel,
} from "./transaction-payment-channel.js";

export type Enhancements = {
  merchantName?: string | null;
  website?: string | null;
  logoUrl?: string | null;
  checkNumber?: string | null;
  paymentChannel: TransactionPaymentChannel;
  categoryId: string | null;
  category: string[];
  location: TransactionLocation;
  personalFinanceCategory?: PersonalFinanceCategory | null;
  personalFinanceCategoryIconUrl?: string;
  counterparties?: Counterparty[];
};

export const enhancementsSchema: Schema<Enhancements> = s.object<Enhancements>({
  merchantName: s.optionalNullable(s.string()),
  website: s.optionalNullable(s.string()),
  logoUrl: s.optionalNullable(s.string()),
  checkNumber: s.optionalNullable(s.string()),
  paymentChannel: transactionPaymentChannelSchema,
  categoryId: s.nullable(s.string()),
  category: s.array(s.string()),
  location: transactionLocationSchema,
  personalFinanceCategory: s.optionalNullable(s.lazy(() => personalFinanceCategorySchema)),
  personalFinanceCategoryIconUrl: s.optional(s.string()),
  counterparties: s.optional(s.array(s.lazy(() => counterpartySchema))),
  _keysMap: {
    merchantName: "merchant_name",
    logoUrl: "logo_url",
    checkNumber: "check_number",
    paymentChannel: "payment_channel",
    categoryId: "category_id",
    personalFinanceCategory: "personal_finance_category",
    personalFinanceCategoryIconUrl: "personal_finance_category_icon_url",
  },
});
