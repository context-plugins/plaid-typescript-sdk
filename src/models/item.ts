import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { itemAuthMethodSchema, type ItemAuthMethod } from "./item-auth-method.js";
import { productsSchema, type Products } from "./products.js";
import { updateTypeSchema, type UpdateType } from "./update-type.js";

/** Metadata about the Item. */
export type Item = {
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId: string;
  /**
   * The Plaid Institution ID associated with the Item. Field is `null` for Items created without an
   * institution connection, such as Items created via Same-Day Micro-deposits.
   */
  institutionId?: string | null;
  /**
   * The name of the institution associated with the Item. Field is `null` for Items created without
   * an institution connection, such as Items created via Same-Day Micro-deposits.
   */
  institutionName?: string | null;
  /** The URL registered to receive webhooks for the Item. */
  webhook: string | null;
  /**
   * The method used to populate Auth data for the Item. This field is only populated for Items that
   * have had Auth numbers data set on at least one of their accounts, and will be `null` otherwise.
   * For info about the various flows, see our [Auth coverage
   * documentation](https://plaid.com/docs/auth/coverage/).
   *
   * `INSTANT_AUTH`: The Item's Auth data was provided directly by the user's institution
   * connection.
   *
   * `INSTANT_MATCH`: The Item's Auth data was provided via the Instant Match fallback flow.
   *
   * `AUTOMATED_MICRODEPOSITS`: The Item's Auth data was provided via the Automated Micro-deposits
   * flow.
   *
   * `SAME_DAY_MICRODEPOSITS`: The Item's Auth data was provided via the Same-Day Micro-deposits
   * flow.
   *
   * `INSTANT_MICRODEPOSITS`: The Item's Auth data was provided via the Instant Micro-deposits flow.
   *
   * `DATABASE_MATCH`: The Item's Auth data was provided via the Database Match flow.
   *
   * `DATABASE_INSIGHTS`: The Item's Auth data was provided via the Database Insights flow.
   *
   * `TRANSFER_MIGRATED`: The Item's Auth data was provided via
   * [`/transfer/migrate_account`](https://plaid.com/docs/api/products/transfer/account-linking/#migrate-account-into-transfers).
   *
   * `INVESTMENTS_FALLBACK`: The Item's Auth data for Investments Move was provided via a [fallback
   * flow](https://plaid.com/docs/investments-move/#fallback-flows).
   */
  authMethod?: ItemAuthMethod | null;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error: Error | null;
  /**
   * A list of products available for the Item that have not yet been accessed. The contents of this
   * array will be mutually exclusive with `billed_products`.
   */
  availableProducts: Products[];
  /**
   * A list of products that have been billed for the Item. The contents of this array will be
   * mutually exclusive with `available_products`. Note - `billed_products` is populated in all
   * environments but only requests in Production are billed. Also note that products that are
   * billed on a pay-per-call basis rather than a pay-per-Item basis, such as `balance`, will not
   * appear here.
   */
  billedProducts: Products[];
  /**
   * A list of products added to the Item. In almost all cases, this will be the same as the
   * `billed_products` field. For some products, it is possible for the product to be added to an
   * Item but not yet billed (e.g. Assets, before `/asset_report/create` has been called, or Auth or
   * Identity when added as Optional Products but before their endpoints have been called), in which
   * case the product may appear in `products` but not in `billed_products`.
   */
  products?: Products[];
  /**
   * A list of products that the user has consented to for the Item via [Data Transparency
   * Messaging](https://plaid.com/docs/link/data-transparency-messaging-migration-guide). This will
   * consist of all products where both of the following are true: the user has consented to the
   * required data scopes for that product and you have Production access for that product.
   */
  consentedProducts?: Products[];
  /**
   * The date and time at which the Item's access consent will expire, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format. If the Item does not have consent expiration
   * scheduled, this field will be `null`. Currently, only institutions in Europe and a small number
   * of institutions in the US have expiring consent. For a list of US institutions that currently
   * expire consent, see the [OAuth
   * Guide](https://plaid.com/docs/link/oauth/#refreshing-item-consent).
   */
  consentExpirationTime: Date | null;
  /**
   * Indicates whether an Item requires user interaction to be updated, which can be the case for
   * Items with some forms of two-factor authentication.
   *
   * `background` - Item can be updated in the background
   *
   * `user_present_required` - Item requires user interaction to be updated
   */
  updateType: UpdateType;
};

export const itemSchema: Schema<Item> = s.object<Item>({
  itemId: s.string(),
  institutionId: s.optionalNullable(s.string()),
  institutionName: s.optionalNullable(s.string()),
  webhook: s.nullable(s.string()),
  authMethod: s.optionalNullable(s.lazy(() => itemAuthMethodSchema)),
  error: s.nullable(s.lazy(() => errorSchema)),
  availableProducts: s.array(s.lazy(() => productsSchema)),
  billedProducts: s.array(s.lazy(() => productsSchema)),
  products: s.optional(s.array(s.lazy(() => productsSchema))),
  consentedProducts: s.optional(s.array(s.lazy(() => productsSchema))),
  consentExpirationTime: s.nullable(s.dateTime()),
  updateType: updateTypeSchema,
  _keysMap: {
    itemId: "item_id",
    institutionId: "institution_id",
    institutionName: "institution_name",
    authMethod: "auth_method",
    availableProducts: "available_products",
    billedProducts: "billed_products",
    consentedProducts: "consented_products",
    consentExpirationTime: "consent_expiration_time",
    updateType: "update_type",
  },
});
