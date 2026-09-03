import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartySchema, type Counterparty } from "./counterparty.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";
import {
  transactionPaymentChannelSchema,
  type TransactionPaymentChannel,
} from "./transaction-payment-channel.js";

export type Enrichments = {
  checkNumber?: string | null;
  counterparties: Counterparty[];
  entityId?: string | null;
  legacyCategoryId?: string | null;
  legacyCategory?: string[] | null;
  location: TransactionLocation;
  logoUrl: string | null;
  merchantName: string | null;
  paymentChannel: TransactionPaymentChannel;
  phoneNumber: string | null;
  personalFinanceCategory: PersonalFinanceCategory | null;
  personalFinanceCategoryIconUrl: string;
  website: string | null;
};

export const enrichmentsSchema: Schema<Enrichments> = s.object<Enrichments>({
  checkNumber: s.optionalNullable(s.string()),
  counterparties: s.array(s.lazy(() => counterpartySchema)),
  entityId: s.optionalNullable(s.string()),
  legacyCategoryId: s.optionalNullable(s.string()),
  legacyCategory: s.optionalNullable(s.array(s.string())),
  location: transactionLocationSchema,
  logoUrl: s.nullable(s.string()),
  merchantName: s.nullable(s.string()),
  paymentChannel: transactionPaymentChannelSchema,
  phoneNumber: s.nullable(s.string()),
  personalFinanceCategory: s.nullable(s.lazy(() => personalFinanceCategorySchema)),
  personalFinanceCategoryIconUrl: s.string(),
  website: s.nullable(s.string()),
  _keysMap: {
    checkNumber: "check_number",
    entityId: "entity_id",
    legacyCategoryId: "legacy_category_id",
    legacyCategory: "legacy_category",
    logoUrl: "logo_url",
    merchantName: "merchant_name",
    paymentChannel: "payment_channel",
    phoneNumber: "phone_number",
    personalFinanceCategory: "personal_finance_category",
    personalFinanceCategoryIconUrl: "personal_finance_category_icon_url",
  },
});
