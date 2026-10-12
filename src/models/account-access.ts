import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountProductAccessNullableSchema,
  type AccountProductAccessNullable,
} from "./account-product-access-nullable.js";

/**
 * Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered
 * `new_accounts`.
 */
export type AccountAccess = {
  /**
   * The unique account identifier for this account. This value must match that returned by the data
   * access API for this account.
   */
  uniqueId: string;
  /**
   * Allow the application to see this account (and associated details, including balance) in the
   * list of accounts. If unset, defaults to `true`.
   *
   * @default true
   */
  authorized?: boolean | null;
  /** Allow the application to access specific products on this account */
  accountProductAccess?: AccountProductAccessNullable | null;
};

export const accountAccessSchema: Schema<AccountAccess> = s.object<AccountAccess>({
  uniqueId: s.string(),
  authorized: s.defaulted(s.nullable(s.boolean()), true),
  accountProductAccess: s.optionalNullable(s.lazy(() => accountProductAccessNullableSchema)),
  _keysMap: {
    uniqueId: "unique_id",
    accountProductAccess: "account_product_access",
  },
});
