import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartySchema, type Counterparty } from "./counterparty.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";
import {
  transactionPaymentChannelSchema,
  type TransactionPaymentChannel,
} from "./transaction-payment-channel.js";

/** A grouping of the Plaid produced transaction enhancement fields. */
export type Enhancements = {
  /**
   * The name of the primary counterparty, such as the merchant or the financial institution, as
   * extracted by Plaid from the raw description.
   */
  merchantName?: string | null;
  /** The website associated with this transaction, if available. */
  website?: string | null;
  /**
   * The URL of a logo associated with this transaction, if available. The logo will always be a
   * 100×100 pixel PNG file.
   */
  logoUrl?: string | null;
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: string | null;
  /**
   * The channel used to make a payment. `online:` transactions that took place online.
   *
   * `in store:` transactions that were made at a physical location.
   *
   * `other:` transactions that relate to banks, e.g. fees or deposits.
   */
  paymentChannel: TransactionPaymentChannel;
  /**
   * The ID of the category to which this transaction belongs. For a full list of categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   */
  categoryId: string | null;
  /**
   * A hierarchical array of the categories to which this transaction belongs. For a full list of
   * categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   */
  category: string[];
  /**
   * A representation of where a transaction took place. Location data is provided only for
   * transactions at physical locations, not for online transactions. Location data availability
   * depends primarily on the merchant and is most likely to be populated for transactions at large
   * retail chains; small, local businesses are less likely to have location data available.
   */
  location: TransactionLocation;
  /**
   * Information describing the intent of the transaction. Most relevant for personal finance use
   * cases, but not limited to such use cases.
   *
   * See the [taxonomy CSV file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list
   * of personal finance categories. If you are migrating to personal finance categories from the
   * legacy categories, also refer to the [migration
   * guide](https://plaid.com/docs/transactions/pfc-migration/).
   */
  personalFinanceCategory?: PersonalFinanceCategory | null;
  /**
   * The URL of an icon associated with the primary personal finance category. The icon will always
   * be a 100×100 pixel PNG file.
   */
  personalFinanceCategoryIconUrl?: string;
  /**
   * The counterparties present in the transaction. Counterparties, such as the merchant or the
   * financial institution, are extracted by Plaid from the raw description.
   */
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
