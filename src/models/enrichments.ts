import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartySchema, type Counterparty } from "./counterparty.js";
import { personalFinanceCategorySchema, type PersonalFinanceCategory } from "./personal-finance-category.js";
import { transactionLocationSchema, type TransactionLocation } from "./transaction-location.js";
import {
  transactionPaymentChannelSchema,
  type TransactionPaymentChannel,
} from "./transaction-payment-channel.js";

/** A grouping of the Plaid produced transaction enrichment fields. */
export type Enrichments = {
  /** The check number of the transaction. This field is only populated for check transactions. */
  checkNumber?: string | null;
  /**
   * The counterparties present in the transaction. Counterparties, such as the merchant or the
   * financial institution, are extracted by Plaid from the raw description.
   */
  counterparties: Counterparty[];
  /** A unique, stable, Plaid-generated ID that maps to the primary counterparty. */
  entityId?: string | null;
  /**
   * The ID of the legacy category to which this transaction belongs. For a full list of legacy
   * categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * We recommend using the `personal_finance_category` for transaction categorization to obtain the
   * best results.
   *
   * @deprecated
   */
  legacyCategoryId?: string | null;
  /**
   * A hierarchical array of the legacy categories to which this transaction belongs. For a full
   * list of legacy categories, see
   * [`/categories/get`](https://plaid.com/docs/api/products/transactions/#categoriesget).
   *
   * We recommend using the `personal_finance_category` for transaction categorization to obtain the
   * best results.
   *
   * @deprecated
   */
  legacyCategory?: string[] | null;
  /**
   * A representation of where a transaction took place. Location data is provided only for
   * transactions at physical locations, not for online transactions. Location data availability
   * depends primarily on the merchant and is most likely to be populated for transactions at large
   * retail chains; small, local businesses are less likely to have location data available.
   */
  location: TransactionLocation;
  /**
   * The URL of a logo associated with this transaction, if available. The logo will always be a
   * 100×100 pixel PNG file.
   */
  logoUrl: string | null;
  /**
   * The name of the primary counterparty, such as the merchant or the financial institution, as
   * extracted by Plaid from the raw description.
   */
  merchantName: string | null;
  /**
   * The channel used to make a payment. `online:` transactions that took place online.
   *
   * `in store:` transactions that were made at a physical location.
   *
   * `other:` transactions that relate to banks, e.g. fees or deposits.
   */
  paymentChannel: TransactionPaymentChannel;
  /**
   * The phone number associated with the counterparty in E.164 format. If there is a location match
   * (i.e. a street address is returned in the location object), the phone number will be location
   * specific.
   */
  phoneNumber: string | null;
  /**
   * Information describing the intent of the transaction. Most relevant for personal finance use
   * cases, but not limited to such use cases.
   *
   * See the [taxonomy CSV file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list
   * of personal finance categories. If you are migrating to personal finance categories from the
   * legacy categories, also refer to the [migration
   * guide](https://plaid.com/docs/transactions/pfc-migration/).
   */
  personalFinanceCategory: PersonalFinanceCategory | null;
  /**
   * The URL of an icon associated with the primary personal finance category. The icon will always
   * be a 100×100 pixel PNG file.
   */
  personalFinanceCategoryIconUrl: string;
  /** The website associated with this transaction. */
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
